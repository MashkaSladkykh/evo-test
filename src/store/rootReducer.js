import {combineReducers} from "redux";

import {cards} from './cards/reducer';
import { cash } from "./cash/reducer";
import { counter } from "./counter/reducer";


const rootReducer = combineReducers({
cards,
cash, 
counter,
});

export default rootReducer;