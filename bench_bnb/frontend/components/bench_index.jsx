import React from 'react';


class BenchIndex extends React.Component {
  componentDidMount() {
    this.props.fetchBenches();
  }

  render() {
    const benches = this.props.benches.map(
      (bench) => <li key={bench.id}>{bench.description}</li>
    );
    return (
      <ul>
        {benches}
      </ul>
    );
  }
}

export default BenchIndex;
