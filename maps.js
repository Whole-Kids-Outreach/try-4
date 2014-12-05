var map;
var infowindow;

window.onload = function initialize() {
var wholekids = new google.maps.LatLng(37.1945048,-90.9527836,21);
var hospital = new google.maps.LatLng(37.7892298,-90.4406394,21);
var hospital2 = new google.maps.LatLng(36.7875175,-90.4256953,21);

var hospitalmarker = "pics/cross.jpg";
  var mapOptions = {
    zoom: 9,
    center: wholekids,
	mapTypeId: google.maps.MapTypeId.SATELLITE,
  };
  
  
 var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);

	
		
	infowindow = new google.maps.InfoWindow();
	var service = new google.maps.places.PlacesService(map);
	service.nearbySearch(request, callback);
	
	  
		var marker = new google.maps.Marker({
			position:wholekids,
			map:map,
			});
		
		var marker = new google.maps.Marker({
		position: hospital,
		map: map,
		icon: hospitalmarker,
		});
		
			var marker = new google.maps.Marker({
		position: hospital2,
		map: map,
		icon: hospitalmarker,
		});
}

function callback(results, status){
	if(status == google.maps.places.PlacesServiceStatus.OK){
		for (var i = 0; i < results.length; i++){
			createMarker(results[i]);
			}
		}
	}

function createMarker(place){
	var placeLoc = place.geometry.location;
	var marker = new google.maps.Marker({
		map: map,
		position: place.geometry.location
		});
		
		google.maps.event.addListener(marker, 'click', function(){
			infowindow.setContent(place.name);
			infowindow.open(map, this);
			});
	}

