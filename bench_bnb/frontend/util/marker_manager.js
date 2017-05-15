export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
  }

  updateMarkers(benches) {
    benches.forEach((bench) => {
      if (!this.markers[bench.id]) {
        this.markers[bench.id] = this.createMarkerFormBench(bench);
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
}
