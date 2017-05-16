import React from 'react';

import BenchMap from './bench_map';
import BenchIndex from './bench_index';

export default ({ benches, fetchBenches, changeFilter }) => (
  <div>
    <BenchMap
      benches={benches}
      changeFilter={changeFilter}
    />
    <BenchIndex
      benches={benches}
      fetchBenches={fetchBenches}
    />
  </div>
);
