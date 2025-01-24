import { screen, render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoInput from "./input";

test("render button", async () => {
  render(<TodoInput />);
  const addButton = screen.getByTestId("add-btn");
  expect(addButton).toBeInTheDocument();

  expect(screen.queryByTestId("content")).toBeNull();

  fireEvent.click(addButton);

  expect(screen.getByTestId("content")).toBeInTheDocument();

  fireEvent.click(addButton);

  expect(screen.queryByTestId("content")).toBeNull();
});
