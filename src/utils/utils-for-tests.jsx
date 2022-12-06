import React from "react";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import ListSlice from "../features/ListSlice";

export function renderWithProviders(
  ui,
  {
    preloadedState = {},
    //Auto create a store instance if non was passed
    store = configureStore({
      reducer: {
        list: ListSlice,
      },
      preloadedState,
    }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return { store, ...render(ui, { wrapper: Wrapper }) };
}
