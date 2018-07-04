import { combineReducers } from 'redux';
import VeggiesReducer from './reducer_veggies';
import ActiveVeggieReducer from './reducer_active_veggie';

const rootReducer = combineReducers({
  veggies: VeggiesReducer,
  activeVeggie: ActiveVeggieReducer
});

export default rootReducer;
