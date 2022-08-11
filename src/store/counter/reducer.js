import {SUM} from './types';

const initialState = {
  amounts: [],
  totalAmount:0,
};

export const counter = (state = initialState, action) => {
  switch (action.type) {
    case SUM:
      return {
        ...state,
        totalAmount: amounts.map(item => item.amount).reduce((prev, next) => prev + next),
      }
    default:
      return state;
  }
}