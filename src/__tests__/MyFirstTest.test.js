import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import List from "../components/List";
import { renderWithProviders } from "../utils/utils-for-tests";

describe("Testing the App Component and the list child", () => {
  test("Check for the text `React`", () => {
    renderWithProviders(<App />);

    const reactText = screen.getByText(/React/i);

    expect(reactText).toBeInTheDocument();
  });

  test("Renders logo in app component", () => {
    renderWithProviders(<App />);

    const altData = screen.getByAltText(/LOGO/i);

    expect(altData).toBeInTheDocument();
  });

  test("The List Component", () => {
    renderWithProviders(<App />);

    // const listText = screen.getByText(/LIST ENTRY/i);

    // expect(listText).toBeInTheDocument();
  });
});

describe("List.js component", () => {
  test("Renders initial state of listData state", () => {
    renderWithProviders(<List />);

    const listItem = screen.getAllByTestId("list-item");

    expect(listItem.length).toEqual(1);
  });

  test("Adds a new entry to the list after button click", () => {
    renderWithProviders(<List />);

    let listItems = screen.getAllByTestId("list-item");
    const button = screen.getByRole("button", {
      name: /New list item/i,
    });

    expect(listItems.length).toEqual(1);
    // Simulating the click event
    userEvent.click(button);
    listItems = screen.getAllByTestId("list-item");
    expect(listItems.length).toEqual(2);
  });
});
