import * as BenchApiUtil from '../util/bench_api_util';

export const RECEIVE_BENCHES = "RECEIVE_BENCHES";
export const RECEIVE_BENCH = "RECEIVE_BENCH";


export const receiveBenches = (benches) => ({
  type: RECEIVE_BENCHES,
  benches
});

export const receiveBenche = (bench) => ({
  type: RECEIVE_BENCH,
  bench
});


export const fetchBenches = (filters) => (dispatch) => (
  BenchApiUtil.fetchBenches(filters)
    .then((benches) => dispatch(receiveBenches(benches)))
);

export const createBench = (bench) => (dispatch) => (
  BenchApiUtil.createBench(bench)
);
