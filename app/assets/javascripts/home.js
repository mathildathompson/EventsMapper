$(document).ready(function(){

    $('#areasearch').change(function(){
        var searchterm = $('#areasearch').val();
        $.ajax({
          url: "/home",
          type: 'POST',
          data: {searchterm: searchterm},
          success: function(){
            stroll.bind($('#yogalist'));
          }
    });
});
});

//  $(document).ready(function(){


//   function initialize() {
//     var mapOptions = {
//       center: new google.maps.LatLng(-34.397, 150.644),
//       zoom: 8,
//       mapTypeId: google.maps.MapTypeId.ROADMAP
//   };
//   var map = new google.maps.Map(document.getElementById("map-canvas"),
//     mapOptions);

//   var markerOptions = {
//     position: new google.maps.LatLng(-34.397, 150.644),
//     map: map
//   };

//   var marker = new google.maps.Marker(markerOptions);
//   marker.setMap(map);

// }
// google.maps.event.addDomListener(window, 'load', initialize);


// });




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