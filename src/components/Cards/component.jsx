import React from "react";

import EmptyList from "../EmptyList";
import EnterCard from "./EnterCard";
import List from "./List";

import "./styles.scss";

const CardsComponent = ({ enterCard, items, isCardsEmpty, onEnterCard, onAddCard }) => (
  <div className="cards">
    <EnterCard
      value={enterCard}
      onChange={onEnterCard}
      onClick={onAddCard}
    />
    {isCardsEmpty
      ? <EmptyList/>
      : (
        <List
          items={items}
        />
      )
    }
  </div>
)

export default CardsComponent;