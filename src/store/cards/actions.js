import {ADD_CARD, REMOVE_CARD, SET_ENTER_CARD} from './types';

export const addCard = payload => ({
  type: ADD_CARD,
  payload,
})

export const removeCard = payload => ({
  type: REMOVE_CARD,
  payload,
})

export const setEnterCard = payload => ({
  type: SET_ENTER_CARD,
  payload,
})