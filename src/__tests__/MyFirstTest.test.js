import { render, screen } from "@testing-library/react";
import App from "../App";

test("Check for the text `React`", () => {
  render(<App />);

  const reactText = screen.getByText(/React/i);

  expect(reactText).toBeInTheDocument();
});

test("Renders logo in app component", () => {
  render(<App />);

  const altData = screen.getByAltText(/LOGO/i);

  expect(altData).toBeInTheDocument();
});
