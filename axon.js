(function(){

	//call the UI page "home"
	App.load('home');

	//define map center
	var mymap = L.map('mapid').setView([51.505, -0.09], 13);

	//which tiles we're using
	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(mymap);

	setInterval(function(){

		$.getJSON( "http://localhost:8080/nervousnet-api/raw-sensor-data/GPS", function( data ) {
			
				//draw marker
				var marker = L.marker([data.lat, data.long]).addTo(mymap);

		});


	}, 1000);


})();
