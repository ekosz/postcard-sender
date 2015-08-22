import Immutable from 'immutable';

import { RETRIEVE_PATH } from '../actions/falcor';

const initialState = Immutable.Map({});

export default function(state = initialState, action) {
  switch(action.type) {
    case RETRIEVE_PATH:
      return state.mergeDeep(action.res.json);
    default:
      return state
  }
}
