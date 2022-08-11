import React from "react";
import {connect} from "react-redux";

import {removeCard} from '../../../../store/cards/actions';

import './styles.scss';

const Item = ({ id, value, onRemoveCard }) => (
  <li className="card">
    <div className="card__value">
     {value}
     <p className="card__date">DATE</p>
    </div>
    <div>
      <button onClick={() => onRemoveCard(id)} className="card__remove">
        x
      </button>
      <p className="card__paysystem">IMAGE</p>
    </div>
  </li>
)

const mapDispatchToProps = {
  onRemoveCard: removeCard
}

export default connect(null, mapDispatchToProps)(Item);