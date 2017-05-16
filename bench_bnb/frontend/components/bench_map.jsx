import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

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

    this.map.addListener('idle', () => {
      let bounds = {
        northEast: {},
        southWest: {}
      };
      let boundsNE = this.map.getBounds().getNorthEast();
      let boundsSW = this.map.getBounds().getSouthWest();

      bounds.northEast.lat = boundsNE.lat();
      bounds.northEast.lng = boundsNE.lng();
      bounds.southWest.lat = boundsSW.lat();
      bounds.southWest.lng = boundsSW.lng();

      this.props.changeFilter('bounds', bounds);
    });

    this.map.addListener('click', (e) => {
      const coords = {
        lat: e.latLng.lat(),
        lng: e.latLng.lng()
      };
      this._handleClick(coords);
    });

    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.benches);
  }

  componentWillUpdate(nextProps) {
    this.MarkerManager.updateMarkers(nextProps.benches);
  }

  _handleClick(coords){
    this.props.history.push({
      pathname: "benches/new",
      search: `lat=${coords.lat}&lng=${coords.lng}`
    });
  }

  render() {
    return (
      <div id="map-container" ref={(map) => (this.mapNode = map)}>

      </div>
    );
  }
}

export default withRouter(BenchMap);
