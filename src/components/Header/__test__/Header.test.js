import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Testing header", () => {
  it("should render same text pass into title props", async () => {
    render(<Header title="My Header" />);
    const headingElement = screen.getByText(/my header/i);
    expect(headingElement).toBeInTheDocument();
  });
});

// it("should render same text pass into title props query by Role", async () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByRole("heading");
//   expect(headingElement).toBeInTheDocument();
// });
// it("should render same text pass into title props query by Role with multiple tags", async () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByRole("heading", { name: "My Header" });
//   expect(headingElement).toBeInTheDocument();
// });
// it("should render same text pass into title", async () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByTitle("Header");
//   expect(headingElement).toBeInTheDocument();
// });
// it("should render same text pass into title getByTestId", async () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.getByTestId("header-2");
//   expect(headingElement).toBeInTheDocument();
// });

//FIND BY
// it("should render same text pass into title findby", async () => {
//   render(<Header title="My Header" />);
//   const headingElement = await screen.findByText(/my header/i);
//   expect(headingElement).toBeInTheDocument();
// });

// //Query By
// it("should render same text pass into title queryby", async () => {
//   render(<Header title="My Header" />);
//   const headingElement = screen.queryByText(/my header/i);
//   expect(headingElement).toBeInTheDocument();
// });
