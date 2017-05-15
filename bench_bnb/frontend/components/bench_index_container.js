import { connect } from 'react-redux';
import values from 'lodash/values';

import { fetchBenches } from '../actions/bench_actions';
import BenchIndex from './bench_index';

const mapStateToProps = (state) => ({
  benches: values(state.benches)
});

const mapDispatchToProps = (dispatch) => ({
  fetchBenches: () => dispatch(fetchBenches())
});

export default connect(mapStateToProps, mapDispatchToProps)(BenchIndex);
