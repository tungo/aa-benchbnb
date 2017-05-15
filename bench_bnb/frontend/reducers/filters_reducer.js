import merge from 'lodash/merge';
import { UPDATE_BOUNDS } from '../actions/filter_actions';

const FiltersReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case UPDATE_BOUNDS:
      const nextState = merge({}, state, {bounds: action.bounds});
      return nextState;

    default:
      return state;
  }
};

export default FiltersReducer;
