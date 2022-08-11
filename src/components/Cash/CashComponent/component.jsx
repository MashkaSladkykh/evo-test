import React from "react";

import EmptyList from "../../EmptyList";
import EnterCash from "../EnterCash";
import List from "../List";

// import "./styles.scss";


const CashComponent = ({ enterCash, items, isCashEmpty, onEnterCash, onAddCash }) => {
  return (
  <div className="cards">
    <EnterCash
      value={enterCash}
      onChange={onEnterCash}
      onClick={onAddCash}
    />
    {isCashEmpty
      ? <EmptyList/>
      : (
        <List
          items={items}
        />
      )
    }
  </div>
)}

export default CashComponent;