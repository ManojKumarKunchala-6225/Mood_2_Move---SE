import React from "react";
import { render, screen } from "@testing-library/react";
import MoodCategories from "./MoodCategories";

test("renders Explore by Mood heading", () => {
  render(<MoodCategories />);
  const heading = screen.getByText(/Explore by Mood/i);
  expect(heading).toBeInTheDocument();
});
