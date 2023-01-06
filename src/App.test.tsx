import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import App from "./App";

test("button has correct initial color", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: "Change to blue" });
  expect(button).toHaveStyle({
    "background-color": "red",
  });
});

test("button turns blue when clicked", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: "Change to blue" });
  fireEvent.click(button);

  expect(button).toHaveStyle({
    "background-color": "blue",
  });
  expect(button).toHaveTextContent("Change to red");
});

test("initial conditions", () => {
  render(<App></App>);
  const colorButton = screen.getByRole("button", { name: "Change to blue" });
  expect(colorButton).toBeEnabled();

  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("Checkbox should disable button on first click and re-enable button on second click", () => {
  render(<App />);
  const checkbox = screen.getByRole("checkbox");
  const colorButton = screen.getByRole("button", {
    name: "Change to blue",
  });

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test("Button should be gray when disabled", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: "Change to blue" });
  const checkbox = screen.getByRole("checkbox");
  expect(button).toHaveStyle({
    backgroundColor: "red",
  });
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({
    backgroundColor: "gray",
  });
});
