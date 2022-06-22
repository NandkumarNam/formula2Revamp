import {combineReducers} from 'redux';
import raceStreamReducer from './raceStreamReducer';

export default combineReducers({
  reacerStreams:  raceStreamReducer
})