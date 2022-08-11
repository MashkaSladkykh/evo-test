import {ADD_CASH, SET_CURRENCY, CHANGE_CASH, SET_ENTER_CASH, REMOVE_CASH} from './types';

const initialState = {
  enterCash: '',
  currency: '',
  items: [],
};

export const cash = (state = initialState, action) => {
  switch (action.type) {
    case SET_ENTER_CASH:
      return {
        ...state,
        enterCash: action.payload,
      }
      case SET_CURRENCY:
      return {
        ...state,
        currency: action.payload,
      }
    case ADD_CASH:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case REMOVE_CASH:
      return {
        ...state,
        items: state.items.filter(card => action.payload !== card.id),
    };
    case CHANGE_CASH:
      return {
        ...state,
        items: state.items.filter(card => action.payload !== card.id),
      };
    default:
      return state;
  }
}