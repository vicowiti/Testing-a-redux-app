import React, { useState } from "react";

const List = () => {
  const [listData, setListData] = useState([
    {
      id: new Date().getSeconds(),
      description: "PengTing",
      significance: "7",
    },
  ]);
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
          setListData([
            ...listData,
            {
              id: new Date().getSeconds(),
              description: "Another peng",
              significance: 999,
            },
          ])
        }
      >
        New List Item
      </button>
    </div>
  );
};

export default List;
