// marker.setMap(map);
//https://stackoverflow.com/questions/25190955/how-can-we-add-multiple-marker-with-click-event-in-google-map
//https://developers.google.com/maps/documentation/javascript/events


// THINK THIS MIGHT HELP ME (below)
//https://gist.github.com/tommcfarlin/f2391b72140454b56920#file-1-infowindow-content-js




//THIS CAN BE ALL OF YOUR ITEMS
var beaches = [
  ['Bondi Beach', -33.890542, 151.274856, 4,"YOU CAN PUT HTML IN HERE <audio></audio>"],
  ['Coogee Beach', -33.923036, 151.259052, 5,"fifth"],
  ['Cronulla Beach', -34.028249, 151.157507, 3,"third"],
  ['Manly Beach', -33.80010128657071, 151.28747820854187, 2,"second"],
  ['Maroubra Beach', -33.950198, 151.259302, 1, "<h1>test</h1><p>this is some text</p><br /><img src='http://blueskiesturnblack.com/files/styles/thumbnail/public/showpics/51899558_1967841216617254_6820626211731931136_o.jpg?itok=F0jj4PBD'>"]
  
  
];




function initMap() {
  var myLatLng = {lat:-33.890542, lng: 151.274856};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: myLatLng,
    styles: [{"featureType":"all","elementType":"geometry","stylers":[{"color":"#ff528e"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"gamma":0.01},{"lightness":20},{"weight":"1.39"},{"color":"#ffffff"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"weight":"0.96"},{"saturation":"9"},{"visibility":"on"},{"color":"#000000"}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"lightness":30},{"saturation":"9"},{"color":"#29446b"}]},{"featureType":"landscape.natural.terrain","elementType":"geometry","stylers":[{"visibility":"on"},{"saturation":"56"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"saturation":20},{"visibility":"on"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"lightness":20},{"saturation":-20}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":10},{"saturation":-30}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#193a55"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"saturation":25},{"lightness":25},{"weight":"0.01"}]},{"featureType":"water","elementType":"all","stylers":[{"lightness":-20}]}]

  });



  const infowindow = new google.maps.InfoWindow();// Only one InfoWindow

  setMarkers(map);

    // marker.addListener('click', function() {
    //   infowindow.open(map, marker);
    // });

function setMarkers(map) {
  for (var i = 0; i < beaches.length; i++) {
    var beach = beaches[i];

    var marker = new google.maps.Marker({
      position: {lat: beach[1], lng: beach[2]},
      map: map,
      title: beach[0],
      zIndex: beach[3],
      info: beach[4]

    });


    google.maps.event.addListener(marker, 'click', function(){
        infowindow.close(); // Close previously opened infowindow
        infowindow.setContent(`<div id="infowindow">`+beach[4]+`</div>`);
       
        infowindow.open(map, marker);

        // bindInfoWindow(marker, map, infowindow);

    // addListenerOnPoint(marker);
    // markers.push(marker);
    // infos.push(infowindow);

 

    });

  }

}



  // var marker = new google.maps.Marker({
  //   position: myLatLng,
  //   map: map,
  //   title: 'Uluru (Ayers Rock)'
  // });
  
  // marker.addListener('click', function() {

  //   var infowindow = new google.maps.InfoWindow({
  //   content: "FFF"
  // });


  //   infowindow.open(map, marker);
  // });



}





