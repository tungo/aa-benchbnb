import React from 'react';

import BenchMap from './bench_map';
import BenchIndex from './bench_index';

export default ({
  benches,
  minSeating,
  maxSeating,
  fetchBenches,
  changeFilter,
  updateFilter
}) => (
  <div>
    <BenchMap
      benches={benches}
      changeFilter={changeFilter}
      updateFilter={updateFilter}
    />
    <FilterForm
      minSeating={minSeating}
      maxSeating={maxSeating}
      updateFilter={updateFilter}
    />
    <BenchIndex
      benches={benches}
      fetchBenches={fetchBenches}
    />
  </div>
);
