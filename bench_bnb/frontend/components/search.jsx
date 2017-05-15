import React from 'react';

import BenchMap from './bench_map';
import BenchIndex from './bench_index';

export default ({ benches, fetchBenches, changeBounds }) => (
  <div>
    <BenchMap
      benches={benches}
      changeBounds={changeBounds}
    />
    <BenchIndex
      benches={benches}
      fetchBenches={fetchBenches}
    />
  </div>
);
