(function(){

	//call the UI page "home"
	App.load('home');

	var mymap = L.map('mapid');
	var marker;

	//which tiles we're using
	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(mymap);

	//poll gps
	setInterval(function(){

		$.getJSON( "http://localhost:8080/nervousnet-api/raw-sensor-data/GPS", function( data ) {

				//set map center and zoom level
				mymap.setView([data.lat, data.long], 19);

				//draw marker
				if (!marker) {
					marker = L.marker([data.lat, data.long]).addTo(mymap);
				}else{
					marker.setLatLng([data.lat, data.long]).update();
				}
		});


	}, 1000);


})();
