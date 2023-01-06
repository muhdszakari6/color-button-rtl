import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import App, { replaceCamelWithSpaces } from "./App";

test("button has correct initial color", () => {
  render(<App />);
  const button = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  expect(button).toHaveStyle({
    "background-color": "MediumVioletRed",
  });
});

test("button turns Midnight Blue when clicked", () => {
  render(<App />);
  const button = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  fireEvent.click(button);

  expect(button).toHaveStyle({
    "background-color": "MidnightBlue",
  });
  expect(button).toHaveTextContent("Change to Medium Violet Red");
});

test("initial conditions", () => {
  render(<App></App>);
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("Checkbox should disable button on first click and re-enable button on second click", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox");
  const colorButton = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test("Button should be gray when disabled", () => {
  render(<App />);
  const button = screen.getByRole("button", {
    name: "Change to Midnight Blue",
  });
  const checkbox = screen.getByRole("checkbox");
  expect(button).toHaveStyle({
    backgroundColor: "Medium Violet Red",
  });
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({
    backgroundColor: "gray",
  });
});

describe("spaces before camel-case capital letters", () => {
  test("Works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("red")).toBe("red");
  });
  test("Works for one inner capital letters", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });
  test("Works for multiple inner capital letters", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
