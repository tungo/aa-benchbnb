import { fetchBenches } from './bench_actions';

export const UPDATE_FILTER = "UPDATE_FILTER";


export const updateFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});


export const changeFilter = (filter, value) => (dispatch, getState) => {
  dispatch(updateFilter(filter, value));
  return fetchBenches(getState().filters)(dispatch);
};
