import { connect } from 'react-redux';

import { fetchBenches } from '../actions/bench_actions';
import { changeFilter } from '../actions/filter_actions';
import { selectAllBenches } from '../reducers/selector';
import Search from './search';

const mapStateToProps = (state) => ({
  benches: selectAllBenches(state.benches)
});

const mapDispatchToProps = (dispatch) => ({
  changeFilter: (filter, value) => dispatch(changeFilter(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
