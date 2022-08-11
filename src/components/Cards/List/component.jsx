import React from "react";

import Item from "./Item";

// import './styles.scss';

const List = ({items}) => (
  <ul className="list">
    {items.map(({ id, value }) => (
      <Item
        key={id}
        id={id}
        value={value}
      />
    ))}
  </ul>
)

export default List;