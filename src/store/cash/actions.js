import {ADD_CASH, CHANGE_CASH, SET_CURRENCY, SET_ENTER_CASH, REMOVE_CASH} from './types';

export const addCash= payload => ({
  type: ADD_CASH,
  payload,
})

export const changeCash = payload => ({
  type: CHANGE_CASH,
  payload,
})

export const setCurrency = payload => ({
  type: SET_CURRENCY,
  payload,
})

export const setEnterCash = payload => ({
  type: SET_ENTER_CASH,
  payload,
})

export const removeCash = payload => ({
  type: REMOVE_CASH,
  payload,
})