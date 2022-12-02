import {songs, releaseTimes} from './variables.js';

var myearth;
var localNewsMarker;
var markers = [];

window.addEventListener( "earthjsload", function() {

	const close = document.getElementById('close-button');
	close.addEventListener('click', closePopup);

	if(document.querySelector('.tracks')) {
		const trackList = Array.from(document.querySelector('.tracks').children);
		trackList.forEach((track, index) => {
			track.addEventListener('click', () => goToSong(index));
		});
	}

	// for(let i = 0; i < 3; i++) {
	// 	document.getElementById(`breaking-news-${i}-title`).addEventListener('click', () => highlightBreakingNews(i));
	// }

	var zoom = calculateZoom();

	myearth = new Earth(document.getElementById('element'), {
		// location : {lat: 18, lng: -50},
		location: {lat: 14.4267077, lng:143.93},
		zoom: zoom.zoom,
		zoomMax: zoom.zoomMax,
		zoomable: true,
		light: 'none',

		transparent: true,
		mapImage: './images/marble-map-texture.png',
		mapBorderWidth : 0.25,
		mapHitTest : true,

		autoRotate: true,
		autoRotateSpeed: 1,
		autoRotateDelay:4000,
		autoRotateEasing: 'out-quad'
	});

	myearth.addEventListener( "ready", function() {

		this.startAutoRotate();

		var stars = [];
		
		// var star_count = 1000;
		
		// for ( var i=0; i < star_count; i++ ) {
		
		// 	stars.push({
		// 		location : { lat: getRandomInt(-60,60), lng: getRandomInt(-180,180) },
		// 		offset: getRandomInt(40,60),
		// 		scale: 2,
		// 		opacity: getRandomInt(20,80)/100,
		// 		color: 'rgb('+ getRandomInt(180,255) +','+ getRandomInt(180,255) +','+ getRandomInt(180,255) +')',
		// 	});
		
		// }
		
		// var mypoints = myearth.addPoints({
		// 	points: stars,
		// 	scale: 0.5 + window.innerWidth / 2000
		// });

		addMarkers();
		//addTimes();
	});



	var selectedCountry;

	myearth.addEventListener( 'click', function( event ) {
		if ( event.id ) {
			if ( selectedCountry != event.id ) {
				selectedCountry = event.id;
			}
	  }
	});
});

window.addEventListener("resize", function() {
	var zoom = calculateZoom();
	myearth.zoom = zoom.zoom;
	myearth.zoomMax = zoom.zoomMax;
	myearth.redrawMap();

	const body = document.querySelector('body');
	body.height = window.innerHeight;
});

function calculateZoom() {
	var zoom;
	var zoomMax = 1.25;

	if(window.innerWidth > 1200) {
		zoom = 1;
	} else if(window.innerWidth > 800) {
		zoom = 0.8
	} else if(window.innerWith > 600) {
		zoom = 0.9;
	} else {
		zoom = 0.6;
	}

	return {zoom, zoomMax};
}

function addMarkers() {
	songs.forEach((song, index) => {
		// markers[index] = myearth.addImage({
		 //    	location: { lat : song.lat, lng : song.lng},
		 //    	image: './images/marker.png',
		 //    	hotspot: true,
		 //    });

	    markers[index] = myearth.addOverlay({
			location: { lat: song.lat, lng: song.lng },
			content : '<img src="./images/crown-red.png">',
			className : 'crown-overlay',
			depthScale : 0.75,
			offset: 0.5,
			zoomScale: 0.5
		});

	    markers[index].element.querySelector('img').addEventListener('click', (event) => openPopup(event, index));
	});
}

const times = [];

function addTimes() {
	releaseTimes.forEach((time, index) => {
		times[index] = myearth.addOverlay({
			location: time.location,
			content : `<h4>${time.timezone}</h4><h3>${time.time}</h3><h4>${time.date}</h4>`,
			className : 'time-overlay',
			depthScale : 0.75,
			offset: 0.5,
			zoomScale: 0
		});
	});
}


function highlightBreakingNews(event, newsId) {
	document.getElementById( 'breaking-news-'+ newsId ).classList.add( 'news-highlight' );
	// setTimeout( function(){
	// 	document.getElementById( 'breaking-news-'+ newsId ).classList.remove( 'news-highlight' );
	// }, 500 );

	myearth.goTo( news[ newsId ].location, { duration: 250, relativeDuration: 70 } );
	event.stopPropagation();
}

function removePulses() {
	markers.forEach(marker => {
		marker.element.classList.remove('pulsing');
	});
}

function goToSong(id) {
	removePulses();
	const animation = myearth.goTo({lat: songs[id].lat, lng: songs[id].lng}, { duration: 250, relativeDuration: 70 } );
	markers[id].element.classList.add('pulsing');
}

function openPopup(event, index) {
	removePulses();
	document.querySelector(".popup-contents").scrollTop = 0;

	//opens popup
	const popup = document.querySelector('.popup');
	popup.classList.remove('close');
	popup.classList.add('open');

	//updates information
	const title = document.getElementById('popup-title');
	title.textContent = songs[index].title;
	const location = document.getElementById('location');
	location.textContent = songs[index].location;

	const credits = document.getElementById('credits');
	credits.innerHTML = "";
	if (songs[index].credits) {
		songs[index].credits.forEach(credit => {
			var a = document.createElement('a'); 
	        var link = document.createTextNode(credit.name);
	        a.appendChild(link); 
	        a.title = credit.name; 
	        a.href = credit.link; 
			const field = document.createElement("p");
			const text = document.createTextNode(credit.title + ": ");
			const value = document.createElement("p");
			field.appendChild(text);
			value.appendChild(a);
			const div = document.createElement("div");
			div.classList.add("popup-details-line");
			const fieldDiv = document.createElement("div");
			fieldDiv.classList.add("popup-details-field");
			const valueDiv = document.createElement("div");
			valueDiv.classList.add("popup-details-value");
			fieldDiv.appendChild(field);
			valueDiv.appendChild(value);
			div.appendChild(fieldDiv);
			div.appendChild(valueDiv);
			credits.appendChild(div);
		});
	}

	const dancerContainer = document.getElementById('dancers');
	dancerContainer.innerHTML = "";

	if(songs[index].dancers) {
		const title = document.createElement("p");
		title.appendChild(document.createTextNode("Dancers:"));
		const div = document.createElement("div");
		div.classList.add("popup-details-line");
		const fieldDiv = document.createElement("div");
		fieldDiv.classList.add("popup-details-field");
		fieldDiv.appendChild(title);

		const valueDiv = document.createElement("div");
		valueDiv.classList.add("popup-details-value");

		songs[index].dancers.forEach((dancer) => {
			// Create anchor element.
	        var a = document.createElement('a'); 
	        var link = document.createTextNode(dancer.name);
	        a.appendChild(link); 
	        a.title = dancer.name; 
	        a.href = dancer.link; 
	          
			const para = document.createElement("p");
			para.appendChild(a);

			valueDiv.appendChild(para);
		});

		div.appendChild(fieldDiv);
		div.appendChild(valueDiv);
		dancerContainer.appendChild(div);
	}

	const blurb = document.getElementById('blurb');
	blurb.innerHTML = songs[index].blurb;

	const iframe = document.getElementById('iframe');
	iframe.setAttribute("src", songs[index].embed);

	const link = document.getElementById('popup-link');
	link.setAttribute("href", songs[index].link);
}

function closePopup(event) {
	const popup = document.querySelector('.popup');
	popup.classList.remove('open');
	popup.classList.add('close');
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}