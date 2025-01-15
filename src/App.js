import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import HomeView from "./components/homeView";
import AboutView from "./components/aboutView";
import TodoInput from "./components/input";
import TodoList from "./components/list";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [temporarytext, settemptext] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    async function fetchTodos() {
      const response = await fetch("https://dummyjson.com/todos");
      const data = await response.json();
      setTodos(data.todos);
    }
    fetchTodos();
  }, []);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const toggleEdit = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const save = (id) => {
    const temp = temporarytext.find((item) => item.id === id);
    if (temp) {
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === id ? { ...todo, todo: temp.text, isEditing: false } : todo
        )
      );
    }
  };

  const back = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isEditing: false } : todo
      )
    );
  };

  const DeleteTodo = (id) => {
    fetch(`https://dummyjson.com/todos/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        if (data.isDeleted) {
          setTodos((prev) => prev.filter((todo) => todo.id !== id));
        }
      });
  };

  const handleAddToDo = () => {
    fetch("https://dummyjson.com/todos/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ todo: task, completed: false, userId: 5 }),
    })
      .then((res) => res.json())
      .then((data) => setTodos((prev) => [...prev, data]));
    setIsVisible(false);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route
          path="/list"
          element={
            <>
              <TodoInput
                task={task}
                setTask={setTask}
                handleAddToDo={handleAddToDo}
                isVisible={isVisible}
                toggleVisibility={toggleVisibility}
              />
              <TodoList
                todos={todos}
                toggleEdit={toggleEdit}
                temporarytext={temporarytext}
                settemptext={settemptext}
                save={save}
                back={back}
                DeleteTodo={DeleteTodo}
              />
            </>
          }
        />
        <Route path="/about" element={<AboutView />} />
      </Routes>
    </Router>
  );
}

export default App;
