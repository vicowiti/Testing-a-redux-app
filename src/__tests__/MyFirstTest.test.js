import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import List from "../components/List";

describe("Testing the App Component and the list child", () => {
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

  test("The List Component", () => {
    render(<App />);

    // const listText = screen.getByText(/LIST ENTRY/i);

    // expect(listText).toBeInTheDocument();
  });
});

describe("List.js component", () => {
  test("Renders initial state of listData state", () => {
    render(<List />);

    const listItem = screen.getAllByTestId("list-item");

    expect(listItem.length).toEqual(1);
  });

  test("Adds a new entry to the list after button click", () => {
    render(<List />);

    let listItems = screen.getAllByTestId("list-item");
    const button = screen.getByRole("button", {
      name: /New list item/i,
    });

    expect(listItems.length).toEqual(1);
    userEvent.click(button);
    listItems = screen.getAllByTestId("list-item");
    expect(listItems.length).toEqual(2);
  });
});
