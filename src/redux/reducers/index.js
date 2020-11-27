import { combineReducers } from 'redux';
import { tracks } from './tracks';
import { artist } from './artist';

export const rootReducer = combineReducers({
  tracks,
  artist,
});
