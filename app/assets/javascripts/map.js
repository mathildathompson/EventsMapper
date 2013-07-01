 
var map; 

  function initMap() {
    var mapOptions = {
      center: new google.maps.LatLng(51.5099983215332, -0.12999999523162842),
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
  };

   map = new google.maps.Map(document.getElementById("map-canvas"),
    mapOptions);

}

 function addMarker(latitude, longitude, title) {
        var marker = new google.maps.Marker({
          position:new google.maps.LatLng(latitude, longitude), 
          map : map, 
          title : title
        });
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