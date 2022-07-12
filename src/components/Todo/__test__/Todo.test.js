import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Todo from "../Todo";

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole("button", { name: /Add/i });

  tasks.forEach((task) => {
    fireEvent.change(inputElement, { target: { value: task } });
    fireEvent.click(buttonElement);
  });
};

describe("Testing AddInput", () => {
  it("should render input element", async () => {
    render(<MockTodo />);

    addTask(["go to grocery", "home work", "wash my hands"]);

    const divElements = screen.getAllByTestId("task-container");

    expect(divElements.length).toBe(3);
  });
  it("task should not have competed class when initially render", async () => {
    render(<MockTodo />);

    addTask(["go to grocery"]);

    const divElement = screen.getByText(/go to grocery/i);

    expect(divElement).not.toHaveClass("todo-item-active");
  });
});
