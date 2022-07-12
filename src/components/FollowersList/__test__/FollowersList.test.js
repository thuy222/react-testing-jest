import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe("Followers List", () => {
  it("should render single follower", async () => {
    render(<MockFollowersList />);

    const followersDivElement = await screen.findByTestId("follower-item-0");

    expect(followersDivElement).toBeInTheDocument();
  });
  // it("should render followers", async () => {
  //   render(<MockFollowersList />);

  //   const followersDivElements = await screen.findAllByTestId(/follower-item/i);

  //   expect(followersDivElements.length).toBe(5);
  // });
});
