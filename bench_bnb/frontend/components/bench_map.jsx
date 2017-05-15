import React from 'react';
import ReactDOM from 'react-dom';

class BenchMap extends React.Component {
  componentDidMount() {
    // SF
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13
    };

    // wrap the mapDOMNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
  }

  render() {
    return (
      <div id="map-container" ref={(map) => (this.mapNode = map)}>

      </div>
    );
  }
}

export default BenchMap;
