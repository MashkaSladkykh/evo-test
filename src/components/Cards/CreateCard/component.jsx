import React from "react";

import EmptyList from "../../EmptyList";
import EnterCard from "../CreateCard/EnterCard";
import List from "../List";

import "./styles.scss";

const CardsComponent = ({ items, enterCard, isCardsEmpty, onEnterCard, onAddCard }) => {
    return (
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
)}

export default CardsComponent;