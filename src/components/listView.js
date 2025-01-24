import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Header from "./header";
import TodoInput from "./input";
import TodoList from "./list";
import "../css/list.css";

const ListView = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [temporarytext, settemptext] = useState([]);

  useEffect(() => {
    async function fetchTodos() {
      try {
        const response = await fetch("https://dummyjson.com/todos");
        const data = await response.json();
        setTodos(data.todos);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    }
    fetchTodos();
  }, []);

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
  };

  return (
    <div className="App">
      <Header />
      <Box className="half-background" />
      <TodoInput task={task} setTask={setTask} handleAddToDo={handleAddToDo} />
      <TodoList
        todos={todos}
        toggleEdit={toggleEdit}
        temporarytext={temporarytext}
        settemptext={settemptext}
        save={save}
        back={back}
        DeleteTodo={DeleteTodo}
      />
    </div>
  );
};

export default ListView;
