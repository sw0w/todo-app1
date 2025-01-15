import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

const TodoInput = ({
  task,
  setTask,
  handleAddToDo,
  isVisible,
  toggleVisibility,
}) => (
  <Box
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "left",
    }}
  >
    <Button
      variant="contained"
      style={{
        backgroundColor: "#3f51b5",
        height: 50,
        marginLeft: 20,
        marginBottom: 55,
        marginTop: 10,
      }}
      onClick={toggleVisibility}
    >
      Add
    </Button>

    {isVisible && (
      <div>
        <TextField
          id="standard-multiline-static"
          label="Add a new task"
          variant="filled"
          multiline
          rows="3"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          sx={{
            marginRight: 1,
            marginLeft: 1,
            width: "400px",
          }}
        />
        <Button
          variant="contained"
          style={{
            backgroundColor: "#3f51b5",
            height: 50,
            marginLeft: 0,
            position: "relative",
          }}
          onClick={handleAddToDo}
        >
          Add new
        </Button>
      </div>
    )}
  </Box>
);

export default TodoInput;
