import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddToListReducer, listSelector } from "../features/ListSlice";
const List = () => {
  const dispatch = useDispatch();
  const listData = useSelector(listSelector);
  return (
    <div>
      <h1>This is a list</h1>
      <ul>
        {listData?.map((item) => (
          <li key={item.id} data-testid="list-item">
            {item.description}
          </li>
        ))}
      </ul>
      <button
        onClick={() =>
          dispatch(
            AddToListReducer({
              id: new Date().getSeconds(),
              description: "Morio",
              significance: 989,
            })
          )
        }
      >
        New List Item
      </button>
    </div>
  );
};

export default List;
