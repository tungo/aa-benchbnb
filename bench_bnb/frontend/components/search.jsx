import React from 'react';

import BenchMap from './bench_map';
import BenchIndex from './bench_index';
import FilterForm from './filter_form';

export default ({
  benches,
  minSeating,
  maxSeating,
  fetchBenches,
  changeFilter
}) => (
  <div>
    <BenchMap
      benches={benches}
      changeFilter={changeFilter}
    />
    <FilterForm
      minSeating={minSeating}
      maxSeating={maxSeating}
      changeFilter={changeFilter}
    />
    <BenchIndex
      benches={benches}
      fetchBenches={fetchBenches}
    />
  </div>
);
