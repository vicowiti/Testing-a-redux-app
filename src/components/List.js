import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { listSelector } from "../features/ListSlice";
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
      <button>New List Item</button>
    </div>
  );
};

export default List;
