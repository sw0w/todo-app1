import React from "react";
import { Button, IconButton, TextField, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoItem = ({
  todo,
  toggleEdit,
  temporarytext,
  settemptext,
  save,
  back,
  DeleteTodo,
}) => {
  return (
    <Box
      sx={{
        opacity: 0,
        padding: 5,
        backgroundColor: "#f4f4f4",
        borderRadius: 2,
        boxShadow: 1,
        position: "relative",
        maxWidth: 300,
        minWidth: 100,
        textAlign: "center",
        animation: "fadeIn2 1s forwards",
      }}
    >
      {todo.isEditing ? (
        <TextField
          size="normal"
          variant="filled"
          fullWidth
          multiline
          rows={2}
          defaultValue={todo.todo}
          sx={{
            minWidth: 300,
            margin: 1,
            marginBottom: 2,
          }}
          onChange={(e) => {
            const tObjectIndex = temporarytext.findIndex(
              (tOjbject) => tOjbject.id === todo.id
            );
            const newArray = [...temporarytext];
            if (tObjectIndex === -1) {
              newArray.push({
                id: todo.id,
                text: e.target.value,
              });
            } else {
              newArray[tObjectIndex] = {
                id: todo.id,
                text: e.target.value,
              };
            }
            settemptext(newArray);
          }}
        />
      ) : (
        <p onClick={() => toggleEdit(todo.id)}>{todo.todo}</p>
      )}

      <IconButton
        sx={{
          position: "absolute",
          bottom: 10,
          right: 10,
        }}
        onClick={() => DeleteTodo(todo.id)}
      >
        <DeleteIcon />
      </IconButton>

      {todo.isEditing && (
        <>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#3f51b5",
              position: "absolute",
              bottom: 10,
              right: 55,
            }}
            onClick={() => save(todo.id)}
          >
            save
          </Button>

          <Button
            variant="outlined"
            style={{
              position: "absolute",
              bottom: 10,
              right: 130,
            }}
            onClick={() => back(todo.id)}
          >
            back
          </Button>
        </>
      )}
    </Box>
  );
};

export default TodoItem;
