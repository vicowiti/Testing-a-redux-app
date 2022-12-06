import { screen } from "@testing-library/react";
import ListSlice, {
  AddToListReducer,
  initialState,
} from "../features/ListSlice";

describe("List slice test", () => {
  test("Initialize slice with initial value", () => {
    const listSliceInit = ListSlice(initialState, { type: "unknown" });

    expect(listSliceInit).toBe(initialState);
  });

  test("Adding to list reducer", () => {
    const testData = {
      id: new Date().getSeconds(),
      description: "Morio",
      significance: 989,
    };

    const afterReducerRan = ListSlice(initialState, AddToListReducer(testData));
    expect(afterReducerRan).toStrictEqual([initialState.at(0), testData]);
  });
});
