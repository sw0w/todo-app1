import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";

const TodoInput = ({ task, setTask, handleAddToDo }) => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <div>
      <Button
        data-testid="add-btn"
        variant="contained"
        style={{
          backgroundColor: "#3f51b5",
          height: 65,
          width: 40,
          borderRadius: "50%",
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 1000,
        }}
        onClick={toggleVisibility}
      >
        add
      </Button>

      {isVisible && (
        <Box
          data-testid="content"
          style={{
            position: "fixed",
            bottom: 100,
            right: 20,
            padding: "2rem",
            backgroundColor: "white",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
            zIndex: 1000,
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            minWidth: "400px",
            minHeight: "200px",
          }}
        >
          <TextField
            id="task-input"
            label="Add a new task"
            variant="filled"
            multiline
            rows={6}
            value={task}
            onChange={(e) => setTask(e.target.value)}
            fullWidth
          />
          <Button
            variant="contained"
            style={{
              backgroundColor: "#3f51b5",
              height: 50,
              width: "100%",
            }}
            onClick={handleAddToDo}
          >
            Add Task
          </Button>
        </Box>
      )}
    </div>
  );
};

export default TodoInput;
