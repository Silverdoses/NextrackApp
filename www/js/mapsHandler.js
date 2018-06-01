/* This file contains all methods for drawing over GoogleMaps layer on Nextrack App*/

/* Ref to <div id="map"></div> */
var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 2.9273, lng: -75.28189},
    zoom: 14
  });
  var trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);
}

