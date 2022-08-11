import React from "react";
import {connect} from "react-redux";

import {removeCash} from '../../../../store/cash/actions';

// import './styles.scss';

const Item = ({ id, value, onRemoveCash }) => (
  <li className="cash">
    <div className="cash__value">
     {value}
    </div>
    <div>
      <button onClick={() => onRemoveCash(id)} className="cash__remove">
        x
      </button>
    </div>
  </li>
)

const mapDispatchToProps = {
  onRemoveCash: removeCash,
}

export default connect(null, mapDispatchToProps)(Item);