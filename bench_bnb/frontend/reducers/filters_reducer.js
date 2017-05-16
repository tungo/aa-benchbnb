import merge from 'lodash/merge';
import { UPDATE_FILTER } from '../actions/filter_actions';

const _nullState = {
  bounds: {},
  minSeating: 1,
  maxSeating: 10
};

const FiltersReducer = (state = _nullState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case UPDATE_FILTER:
      const { filter, value } = action;
      return merge({}, state, {[filter]: value});

    default:
      return state;
  }
};

export default FiltersReducer;
