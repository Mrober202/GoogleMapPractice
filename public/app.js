var initialise = function() {
  var center = {lat: 55.857103, lng: -4.243951};
  var zoom = 18;
  var mapDiv = document.querySelector("#main-map");
  var mainMap = new MapWrapper(mapDiv, center, zoom);

  mainMap.addMarker(center);

  mainMap.addClickEvent();

  // mainMap.infoWindow();

  var button = document.querySelector("#bounce-button");
  button.addEventListener("click", mainMap.bounceMarkers.bind(mainMap));

  var buttButton = document.querySelector("#butt-button");
  buttButton.addEventListener("click", mainMap.goToButt.bind(mainMap));

 }

window.addEventListener("load", initialise);