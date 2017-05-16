import { fetchBenches } from './bench_actions';

export const UPDATE_BOUNDS = "UPDATE_BOUNDS";
export const UPDATE_FILTER = "UPDATE_FILTER";


export const updateBounds = (bounds) => ({
  type: UPDATE_BOUNDS,
  bounds
});

export const updateFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});


export const changeBounds = (bounds) => (dispatch, getState) => {
  dispatch(updateBounds(bounds));
  return fetchBenches(getState().filters)(dispatch);
};
