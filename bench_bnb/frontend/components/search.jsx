import React from 'react';

import BenchMap from './bench_map';
import BenchIndex from './bench_index';

class Search extends React.Component {
  render() {
    return (
      <div>
        <BenchMap />
        <BenchIndex />
      </div>
    );
  }
}

export default Search;
