import { render, screen, fireEvent } from "@testing-library/react";
import AddInput from "../AddInput";

//setTodos là một function, tuy nhiên đang ko cần test props function,
//nên có thể mock function bằng jest. Function này ko làm gì cả

const mockedSetTodo = jest.fn();

describe("Testing AddInput", () => {
  it("should render input element", async () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
  });
  it("should be able to type to input", async () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);

    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);

    fireEvent.change(inputElement, { target: { value: "do home work" } });

    expect(inputElement.value).toBe("do home work");
  });
  it("should empty input when button is clicked", async () => {
    render(<AddInput todos={[]} setTodos={mockedSetTodo} />);

    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByRole("button", { name: /Add/i });

    fireEvent.change(inputElement, { target: { value: "do home work" } });
    fireEvent.click(buttonElement);

    expect(inputElement.value).toBe("");
  });
});
