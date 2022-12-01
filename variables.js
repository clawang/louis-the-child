const songs = [
	{
		title: "INTRO",
		location: "Los Angeles",
		lat : 34.05,
		lng : -118.24,
		dancers: [
			{
				name: "Jake Kodish",
				link: "https://www.instagram.com/jakekodish"
			}
		]
	},
	{
		title: "THE CITY IS MINE",
		location: "Los Angeles",
		lat : 34.05,
		lng : -118.24,
		dancers: [
			{
				name: "Jake Kodish",
				link: "https://www.instagram.com/jakekodish"
			}
		]
	},
	{
		title: "GRITTY",
		location: "Tokyo",
		lat : 35.67,
		lng : 139.65,
		dancers: [
			{
				name: "Nao",
				link: "https://www.instagram.com/naobbb"
			}
		]
	},
	{
		title: "DRAGNET",
		location: "Chicago",
		lat : 41.88,
		lng : -87.63,
		dancers: [
			{
				name: "Michael Davis",
				link: "https://www.instagram.com/mikedchicago"
			},
			{
				name: "Marquis Hudson",
				link: "https://www.instagram.com/imadoniz"
			}
		]
	},
	{
		title: "SUPERSONIC",
		location: "Paris",
		lat : 48.86,
		lng : 2.35,
		dancers: [
			{
				name: "Makayla Djamela",
				link: "https://www.instagram.com/djaian_"
			}
		]
	},
	{
		title: "HYPE",
		location: "Tokyo",
		lat : 35.67,
		lng : 139.65,
		dancers: [
			{
				name: "Nao",
				link: "https://www.instagram.com/naobbb"
			}
		]
	},
	{
		title: "OOH",
		location: "London",
		lat : 51.51,
		lng : -0.13,
		dancers: [
			{
				name: "Duran Abdullah",
				link: "https://www.instagram.com/duran_deedee"
			}
		]
	},
	{
		title: "DORK",
		location: "Vancouver",
		lat : 49.29,
		lng : -123.12,
		dancers: [
			{
				name: "Tyler Olson",
				link: "https://www.instagram.com/tlo_says"
			}
		]
	},
	{
		title: "WOLF TEETH",
		location: "Miami",
		lat : 25.76,
		lng : -80.19,
		dancers: [
			{
				name: "Marisa Fernandez",
				link: "https://www.instagram.com/marisafernandez_"
			}
		]
	},
	{
		title: "MOOMBAHTON",
		location: "Miami",
		lat : 25.76,
		lng : -80.19,
		dancers: [
			{
				name: "Kerine Jean-Pierre",
				link: "https://www.instagram.com/lerougepierre"
			}
		]
	},
	{
		title: "TECHNO JAM",
		location: "Berlin",
		lat : 52.52,
		lng : 13.40,
		dancers: [
			{
				name: "Klara Michel",
				link: "https://www.instagram.com/Klara.oversun"
			}
		]
	},
	{
		title: "AMSTERDAM",
		location: "Amsterdam",
		lat : 52.37,
		lng : 4.9,
	},
	{
		title: "GET DOWN",
		location: "New York",
		lat : 40.71,
		lng : -74,
		dancers: [
			{
				name: "Matt Kennedy",
				link: "https://www.instagram.com/the_matt_attack___"
			},
			{
				name: "Keturah Stephen",
				link: "https://www.instagram.com/_turahh_"
			},
			{
				name: "Gianna Theodore",
				link: "https://www.instagram.com/giannatheodore"
			},
			{
				name: "Chelsea Lovell"
			},
			{
				name: "Dharon Jones",
				link: "https://www.instagram.com/dharonejones"
			}
		]
	},
	{
		title: "DANCE TUNE",
		location: "Los Angeles",
		lat : 34.05,
		lng : -118.24,
		dancers: [
			{
				name: "Trinity Penn",
				link: "https://www.instagram.com/trinitypenn"
			},
			{
				name: "Devin Penn",
				link: "https://www.instagram.com/devinpenn"
			}
		]
	},
	{
		title: "WERK THAT BEAT",
		location: "Vancouver",
		lat : 49.29,
		lng : -123.12,
		dancers: [
			{
				name: "Astrid Eckerle",
				link: "https://www.instagram.com/astrideckerle"
			}
		]
	},
	{
		title: "CRUSHED PIECES",
		location: "Los Angeles",
		lat : 34.05,
		lng : -118.24,
		dancers: [
			{
				name: "Jaime Reid",
				link: "https://www.instagram.com/yogerina"
			}
		]
	},
	{
		title: "LOWLIGHT",
		location: "Los Angeles",
		lat : 34.05,
		lng : -118.24,
		dancers: [
			{
				name: "Kevin Davis"
			},
			{
				name: "Gordon Watkins",
				link: "https://www.instagram.com/_gordonwatkins"
			},
			{
				name: "Kenj’y Keass"
			},
			{
				name: "oshua Morales"
			},
			{
				name: "Paul Casasola",
				link: "https://www.instagram.com/thecrowdmover"
			},
			{
				name: "Brandon Hunt",
				link: "https://www.instagram.com/kaio.d.atrocity"
			}
		]
	}
];

const releaseTimes = [
	{
		time: "9:00PM",
		timezone: "PST",
		date: "Dec 1",
		location: {lat: 34.05, lng: -118.24}
	},
	{
		time: "12:00AM",
		timezone: "EST",
		date: "Dec 2",
		location: {lat: 40.71, lng: -74}
	},
	{
		time: "8:00AM",
		timezone: "GMT",
		date: "Dec 2",
		location: {lat: 58.42, lng: -13.66}
	},
	{
		time: "9:00AM",
		timezone: "CET",
		date: "Dec 2",
		location: {lat: 45.83, lng: 20.27}
	},
	{
		time: "5:00PM",
		timezone: "JST",
		date: "Dec 2",
		location: {lat: 35.67, lng: 139.65}
	},
	{
		time: "6:00PM",
		timezone: "AEDT",
		date: "Dec 2",
		location: {lat: -25.99, lng: 133.19}
	}
];

export {songs, releaseTimes};