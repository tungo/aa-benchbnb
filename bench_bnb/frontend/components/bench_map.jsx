import React from 'react';
import ReactDOM from 'react-dom';

import MarkerManager from '../util/marker_manager';

class BenchMap extends React.Component {
  componentDidMount() {
    // SF
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13
    };
    // wrap the mapDOMNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);

    let bounds = {
      northEast: {},
      southWest: {}
    };
    this.map.addListener('idle', () => {
      let b = this.map.getBounds();
      bounds.northEast.lat = b.getNorthEast().lat();
      bounds.northEast.lng = b.getNorthEast().lng();
      bounds.southWest.lat = b.getSouthWest().lat();
      bounds.southWest.lng = b.getSouthWest().lng();

      this.props.changeBounds(bounds);
    });

    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.benches);
  }

  componentWillUpdate(nextProps) {
    this.MarkerManager.updateMarkers(nextProps.benches);
  }

  render() {
    return (
      <div id="map-container" ref={(map) => (this.mapNode = map)}>

      </div>
    );
  }
}

export default BenchMap;
