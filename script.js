var myearth;
var localNewsMarker;
var markers = [];
var songs = [
	{
		title: "INTRO",
		location: "Los Angeles",
		lat : 34.05,
		lng : -118.24
	},
	{
		title: "THE CITY IS MINE",
		location: "Los Angeles",
		lat : 34.05,
		lng : -118.24
	},
	{
		title: "GRITTY",
		location: "Tokyo",
		lat : 35.67,
		lng : 139.65
	},
	{
		title: "DRAGNET",
		location: "Chicago",
		lat : 41.88,
		lng : -87.63
	},
	{
		title: "SUPERSONIC",
		location: "Paris",
		lat : 48.86,
		lng : 2.35
	},
	{
		title: "HYPE",
		location: "Tokyo",
		lat : 35.67,
		lng : 139.65
	},
	{
		title: "OOH",
		location: "London",
		lat : 51.51,
		lng : -0.13
	},
	{
		title: "DORK",
		location: "Vancouver",
		lat : 49.29,
		lng : -123.12
	},
	{
		title: "WOLF TEETH",
		location: "Miami",
		lat : 25.76,
		lng : -80.19
	},
	{
		title: "MOOMBAHTON",
		location: "Miami",
		lat : 25.76,
		lng : -80.19
	},
	{
		title: "TECHNO JAM",
		location: "Berlin",
		lat : 52.52,
		lng : 13.40
	},
	{
		title: "AMSTERDAM",
		location: "Amsterdam",
		lat : 52.37,
		lng : 4.9
	},
	{
		title: "GET DOWN",
		location: "New York",
		lat : 40.71,
		lng : -74
	},
	{
		title: "DANCE TUNE",
		location: "Los Angeles",
		lat : 34.05,
		lng : -118.24
	},
	{
		title: "WERK THAT BEAT",
		location: "Vancouver",
		lat : 49.29,
		lng : -123.12
	},
	{
		title: "CRUSHED PIECES",
		location: "Los Angeles",
		lat : 34.05,
		lng : -118.24
	},
	{
		title: "LOWLIGHT",
		location: "Los Angeles",
		lat : 34.05,
		lng : -118.24
	}
];

window.addEventListener( "earthjsload", function() {

	const close = document.getElementById('close-button');
	close.addEventListener('click', closePopup);

	const trackList = Array.from(document.getElementById('track-list').children);
	console.log(trackList);
	trackList.forEach((track, index) => {
		track.addEventListener('click', () => goToSong(index));
	});

	// for(let i = 0; i < 3; i++) {
	// 	document.getElementById(`breaking-news-${i}-title`).addEventListener('click', () => highlightBreakingNews(i));
	// }

	myearth = new Earth(document.getElementById('element'), {
		location : {lat: 18, lng: -50},
		zoom: 1,
		light: 'none',

		transparent : true,
		mapImage: './images/marble-map-texture.png',
		// mapSeaColor : 'RGBA(255,255,255,0.76)',
		// mapLandColor : '#000000',
		// mapBorderColor : '#5D5D5D',
		mapBorderWidth : 0.25,
		mapHitTest : true,

		autoRotate: true,
		autoRotateSpeed: 0.7,
		autoRotateDelay: 4000,
	});

	myearth.addEventListener( "ready", function() {

		this.startAutoRotate();

		songs.forEach((song, index) => {
			markers[index] = myearth.addImage({
		    	location: { lat : song.lat, lng : song.lng},
		    	image: './images/marker.png',
		    	hotspot: true,
		    });

		    markers[index].addEventListener('click', (event) => openPopup(event, index));
		})
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


function highlightBreakingNews(event, newsId) {
	console.log('are you highlighting');
	document.getElementById( 'breaking-news-'+ newsId ).classList.add( 'news-highlight' );
	// setTimeout( function(){
	// 	document.getElementById( 'breaking-news-'+ newsId ).classList.remove( 'news-highlight' );
	// }, 500 );

	myearth.goTo( news[ newsId ].location, { duration: 250, relativeDuration: 70 } );
	event.stopPropagation();
}

function goToSong(id) {
	myearth.goTo({lat: songs[id].lat, lng: songs[id].lng}, { duration: 250, relativeDuration: 70 } );
}

function openPopup(event, index) {
	console.log('opening popup');

	//opens popup
	const popup = document.querySelector('.popup');
	popup.classList.remove('close');
	popup.classList.add('open');

	//updates information
	const title = document.getElementById('popup-title');
	title.textContent = songs[index].title;
	const location = document.getElementById('location');
	location.textContent = songs[index].location;
}

function closePopup(event) {
	const popup = document.querySelector('.popup');
	popup.classList.remove('open');
	popup.classList.add('close');
}