import { fetchBenches } from './bench_actions';

export const UPDATE_BOUNDS = "UPDATE_BOUNDS";


export const updateBounds = (bounds) => ({
  type: UPDATE_BOUNDS,
  bounds
});


export const changeBounds = (bounds) => (dispatch, getState) => {
  console.log(bounds);
  dispatch(updateBounds(bounds));
  console.log(getState().filters);
  return fetchBenches(getState().filters)(dispatch);
};
