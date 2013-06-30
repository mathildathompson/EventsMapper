 $(document).ready(function(){


  function initialize() {
    var mapOptions = {
      center: new google.maps.LatLng(-34.397, 150.644),
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById("map-canvas"),
    mapOptions);
}

  // var markerOptions = {
  //   position: new google.maps.LatLng(-34.397, 150.644),
  //   map: map
  // };

  // var marker = new google.maps.Marker(markerOptions);
  // marker.setMap(map);

  var latlng = [];
    function addMarker(latitude, longitude, title) {
    var markerLatlng = new google.maps.LatLng(latitude, longitude);
    var markerSettings={
        position: markerLatlng,
        map: map,   
        title: title
      }

  var marker = new google.maps.Marker(markerSettings);
  markers.push(marker);
  latlng.push(markerLatlng);
};


google.maps.event.addDomListener(window, 'load', initialize);


});



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