import { connect } from 'react-redux';

import { fetchBenches } from '../actions/bench_actions';
import { changeFilter, updateFilter } from '../actions/filter_actions';
import { selectAllBenches } from '../reducers/selector';
import Search from './search';

const mapStateToProps = (state) => ({
  benches: selectAllBenches(state.benches),
  minSeating: state.filters.minSeating,
  maxSeating: state.filters.maxSeating
});

const mapDispatchToProps = (dispatch) => ({
  changeFilter: (filter, value) => dispatch(changeFilter(filter, value)),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
