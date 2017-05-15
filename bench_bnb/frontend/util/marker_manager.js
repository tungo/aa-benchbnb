export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(benches) {
    const objBenches = {};

    benches.forEach((bench) => {
      objBenches[bench.id] = bench;

      if (!this.markers[bench.id]) {
        this.markers[bench.id] = this.createMarkerFormBench(bench);
      }
    });

    Object.keys(this.markers).forEach((id) => {
      if (!objBenches[id]) {
        this.removeMarker(id);
      }
    });
  }

  createMarkerFormBench(bench) {
    let pos = new google.maps.LatLng(
      bench.lat,
      bench.lng
    );

    let marker = new google.maps.Marker({
      position: pos,
      title: bench.description
    });

    marker.setMap(this.map);
    return marker;
  }

  removeMarker(id) {
    this.markers[id].setMap(null);
    delete this.markers[id];
  }
}
