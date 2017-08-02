var MapWrapper = function(container, center, zoom) {
  this.googleMap = new google.maps.Map(container, {
    center: center,
    zoom: zoom
  });
  this.markers = [];
}

MapWrapper.prototype.addMarker = function(coords, image) {
  var marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap,
    icon: "http://www.iconarchive.com/download/i57818/icons-land/vista-map-markers/Map-Marker-Flag-3-Right-Azure.ico"
  });
  this.markers.push(marker);
  marker.addListener('click', function(event) {
    var infowindow = new google.maps.InfoWindow({
      content: "Latitude: " + event.latLng.lat() + ", " + "Longitude: " + event.latLng.lng()  
    });
    infowindow.open(this.googleMap, marker);
  }.bind(this));
}

MapWrapper.prototype.addClickEvent = function() {
  google.maps.event.addListener(this.googleMap, "click", function(event) {
    var coords = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    }
    this.addMarker(coords, image);
  }.bind(this));
};

MapWrapper.prototype.bounceMarkers = function() {
  this.markers.forEach(function(marker) {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  });
}

 MapWrapper.prototype.goToButt = function( ) {  
  var image = "http://www.iconarchive.com/download/i57818/icons-land/vista-map-markers/Map-Marker-Flag-3-Right-Azure.ico" 
   var coords = {
              lat: 53.484691,
              lng: -1.211447
          }
          this.addMarker(coords, image);
          this.googleMap.setCenter(coords);
      };
 


