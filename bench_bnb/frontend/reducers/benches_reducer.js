import merge from 'lodash/merge';

import { RECEIVE_BENCHES, RECEIVE_BENCH } from '../actions/bench_actions';

const BenchesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_BENCHES:
      return action.benches;

    case RECEIVE_BENCH:
      const { bench } = action;
      return merge({}, state, {[bench.id]: bench});

    default:
      return state;
  }
};

export default BenchesReducer;
