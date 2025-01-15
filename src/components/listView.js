import React from "react";
import Header from "./header";
import TodoInput from "./input";
import TodoList from "./list";
import "../App.css";

const ListView = ({
  task,
  setTask,
  handleAddToDo,
  isVisible,
  toggleVisibility,
  todos,
  toggleEdit,
  temporarytext,
  settemptext,
  save,
  back,
  DeleteTodo,
}) => (
  <div className="App">
    <Header />
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
  </div>
);

export default ListView;
