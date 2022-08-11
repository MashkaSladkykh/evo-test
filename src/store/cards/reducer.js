import {ADD_CARD, REMOVE_CARD, SET_ENTER_CARD} from './types';

const initialState = {
  enterCardNumber: '',
  items: [],
};

export const cards = (state = initialState, action) => {
  switch (action.type) {
    case SET_ENTER_CARD:
      return {
        ...state,
        enterCardNumber: action.payload,
      }
    case ADD_CARD:
      return {
        ...state,
        items: [...state.items, action.payload]
      };
    case REMOVE_CARD:
      return {
        ...state,
        items: state.items.filter(card => action.payload !== card.id),
      };
    default:
      return state;
  }
}