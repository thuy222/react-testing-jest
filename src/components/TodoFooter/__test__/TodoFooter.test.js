import { render, screen } from "@testing-library/react";
import TodoFooter from "../TodoFooter";
import { BrowserRouter } from "react-router-dom";

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

describe("testing footer", () => {
  it("should render correct amount of incomplete tasks", async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={3} />);
    const footerElement = screen.getByText(/3 tasks left/i);
    expect(footerElement).toBeInTheDocument();
  });
  it("should render correct amount of incomplete task", async () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const footerElement = screen.getByText(/1 task left/i);
    expect(footerElement).toBeInTheDocument();
  });
});
