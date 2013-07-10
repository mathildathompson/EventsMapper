 
var map; 
var markers = [];

function initMap() {
  var mapOptions = {
      center: new google.maps.LatLng(51.5099983215332, -0.12999999523162842),
      zoom: 12,
      mapTypeId:google.maps.MapTypeId.ROADMAP,
  };

  map = new google.maps.Map(document.getElementById("map-canvas"),
    mapOptions);
}

var latlng = [];

var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
function addMarker(latitude, longitude, title) {
  var markerLatlng = new google.maps.LatLng(latitude, longitude);
  var markerSettings={
    position: markerLatlng,
    map: map,   
    title: title,
    draggable:true,
    optimized:false
    // icon: iconBase + 'info-i_maps.png',
    // shadow: iconBase + 'info-i_maps.shadow.png'
  };
  //icon:/assets/images, you can do it in the marker settings
  var markerBounds = new google.maps.LatLngBounds();
  markerBounds.extend(markerLatlng);
  map.fitBounds(markerBounds);

  var listener = google.maps.event.addListener(map, "idle", function() { 
  if (map.getZoom() > 12) map.setZoom(12); 
  google.maps.event.removeListener(listener); 
  });

  var marker = new google.maps.Marker(markerSettings);
  // marker.setIcon({/assets/images});
  markers.push(marker);
  latlng.push(markerLatlng);

  var infoWindowOptions = {
     content: title
  };

  var infoWindow = new google.maps.InfoWindow(infoWindowOptions);

  google.maps.event.addListener(marker, 'click', function(e){
   infoWindow.open(map, marker);
  });

};

// function setAllMap(map) {
//   for (var i = 0; i < markers.length; i++) {
//     markers[i].setMap(map);
//     // map.fitBounds(getBoundsForLatLng(latLng));
//   }
// }

function zoomin(latlng){
var latlngbounds = new google.maps.LatLngBounds();
for (var i = 0; i < latlng.length; i++) {
  latlngbounds.extend(latlng[i]);
}
map.fitBounds(latlngbounds);
};
// Sets the map on all markers in the array.
function setAllMap(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

function clearOverlays() {
  setAllMap(null);
}

// Shows any overlays currently in the array.
function showOverlays() {
  setAllMap(map);
}

// Deletes all markers in the array by removing references to them.
function deleteOverlays() {
  clearOverlays();
  markers = [];
}





// google.maps.event.addDomListener(window, 'load', initialize);





//  function addMarker(latitude, longitude, title) {
//     var markerLatlng = new google.maps.LatLng(latitude, longitude);
//     var markerSettings={
//         position: markerLatlng,
//         map: map,   
//         title: title
//       }
//     //this way we still use the default marker when there is none set
//     switch (whatami) {
//         case 'park':
//         markerSettings.icon = '/assets/parkmarker.png';
//         break;

//         case 'rest':
//         markerSettings.icon = '/assets/restaurantmarker.png';
//         break;

//         case 'meetup':
//         markerSettings.icon = '/assets/meetupmarker.png';
//         break;
//       }

//   var marker = new google.maps.Marker(markerSettings);
//   markers.push(marker);
//   latlng.push(markerLatlng);
// };








//  var mapOptions = {
//     center: new google.maps.LatLng(37.7831,-122.4039),
//     zoom: 12,
//     mapTypeId: google.maps.MapTypeId.ROADMAP
// };

// new google.maps.Map(document.getElementById('map'), mapOptions);

// var markerOptions = {
//     position: new google.maps.LatLng(37.7831, -122.4039)
// };
// var marker = new google.maps.Marker(markerOptions);
// marker.setMap(map)