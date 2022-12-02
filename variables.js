const songs = [
	{
		title: "BLACK MARBLE INTRO",
		location: "Los Angeles",
		lat : 31.05,
		lng : -118.24,
		dancers: [
			{
				name: "Jake Kodish",
				link: "https://www.instagram.com/jakekodish"
			}
		],
		credits: [
			{	title: "DP",
				name: "Russell Tandy",
				link: "https://www.instagram.com/russelltandy_"
			}
		],
		link: "https://youtu.be/Tq7Yh2Rric8",
		blurb: "This song has a really industrial, percussive feel, and it feels like the drop hits in an unexpected way. We love the vocal chops and high energy percussion on this one. It felt like a good introduction to the world of Black Marble. This song has a really industrial, percussive feel, and it feels like the drop hits in an unexpected way. We love the vocal chops and high energy percussion on this one. It felt like a good introduction to the world of Black Marble."
	},
	{
		title: "THE CITY IS MINE",
		location: "Los Angeles",
		lat : 36.05,
		lng : -118.24,
		dancers: [
			{
				name: "Jake Kodish",
				link: "https://www.instagram.com/jakekodish"
			}
		],
		credits: [
			{	title: "DP",
				name: "Russell Tandy",
				link: "https://www.instagram.com/russelltandy_"
			}
		],
		link: "https://youtu.be/YigP_7DIckY",
		blurb: "We made this song in Chicago at Christmas time with Freddy’s brother, Sleepyhead (Casey). This song was a part of our Euphoria Tour, and it’s a lot of fun to play live!"
	},
	{
		title: "GRITTY",
		location: "Tokyo",
		lat : 36.67,
		lng : 140.65,
		dancers: [
			{
				name: "Nao",
				link: "https://www.instagram.com/naobbb"
			}
		],
		credits: [
			{	title: "DP",
				name: "John Clayton Lee",
				link: "https://www.instagram.com/johnclaytonlee"
			}
		],
		link: "https://youtu.be/B_gjapavOBQ",
		blurb: "This song reminds us of a dark electronic orchestral piece. The build and Melodies feel like Beethoven played on a broken synth, and the drop is as gritty as the name!"
	},
	{
		title: "DRAGNET",
		location: "Chicago",
		lat : 41.88,
		lng : -87.63,
		dancers: [
			{
				name: "Unit 2 Michael Davis",
				link: "https://www.instagram.com/mikedchicago"
			},
			{
				name: "Marquis Hudson",
				link: "https://www.instagram.com/imadoniz"
			}
		],
		credits: [
			{	title: "DP",
				name: "Unit 2 Troy Gueno",
				link: "https://www.instagram.com/troyfromchicago"
			}
		],
		link: "https://youtu.be/_U0lWJaECbk",
		blurb: "One of our favorite moments of the whole film! Really epic horn moment + the reveal of Chicago in the film = 🫠"
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
		],
		credits: [
			{	title: "DP",
				name: "Jimmy Liu Nyeango",
				link: "https://www.instagram.com/jimmynyeango"
			}
		],
		link: "https://youtu.be/YECxCKw4Y_s",
		blurb: "This is one of the most fun to play live. When the synth line and drums come in, people are thrown off guard in a great way. After working on the song for a while, it reminded us of the beat for Supersonic by J.J. Fad. Shoutout Dom from Big Gigantic for showing us that song! Supersonic!!!"
	},
	{
		title: "HYPE",
		location: "Tokyo",
		lat : 34.67,
		lng : 138.65,
		dancers: [
			{
				name: "Nao",
				link: "https://www.instagram.com/naobbb"
			}
		],
		credits: [
			{	title: "DP",
				name: "John Clayton Lee",
				link: "https://www.instagram.com/johnclaytonlee"
			}
		],
		link: "https://youtu.be/u-NdF4gwoEU",
		blurb: "As the name suggests, this song has some crazy energy to it. A lot of the sounds used in this song harken back to early Skrillex songs that we loved when we were first falling in love with electronic music. The “oh f*ck” sample before the 2nd drop is from some random video we found online of a small rocket exploding or something like that. We thought it was a hilarious video and the sample just worked perfectly in the song."
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
		],
		credits: [
			{	title: "DP",
				name: "Eden Tarn",
				link: "https://www.instagram.com/madeineden"
			}
		],
		link: "https://youtu.be/0mORVvl-TG0",
		blurb: "This is also one that we played on the Euphoria Tour before we started working on Black Marble. When we saw the dance scene for this we were absolutely blown away. The camera spinning around added a whole other dimension to it."
	},
	{
		title: "DORK",
		location: "Vancouver",
		lat : 51.29,
		lng : -121.12,
		dancers: [
			{
				name: "Tyler Olson",
				link: "https://www.instagram.com/tlo_says"
			}
		],
		credits: [
			{	title: "DP/Dir",
				name: "Jacob Crawford",
				link: "https://www.instagram.com/jacobcrawfordfilm"
			},
			{	title: "B Camera Operator",
				name: "Bryce MacGregor",
				link: "https://www.instagram.com/brycemacgregor"
			},
			{	title: "Producer",
				name: "Bailey Wood",
				link: "https://www.instagram.com/baileywood____"
			}
		],
		link: "https://youtu.be/UkQUbV86BS4",
		blurb: "This one is one of the more unique tunes on the project. With the transient vocal chops, distorted rhythmic bass, and mid tempo, almost hip hop groove, this one stands out style wise."
	},
	{
		title: "WOLF TEETH",
		location: "Miami",
		lat : 26.76,
		lng : -79.19,
		dancers: [
			{
				name: "Marisa Fernandez",
				link: "https://www.instagram.com/marisafernandez_"
			}
		],
		credits: [
			{
				title: "DP",
				name: "Karli Evans",
				link: "https://www.instagram.com/allseeingmedia"
			}
		],
		link: "https://youtu.be/KmA2SzmJGzs",
		blurb: "This song really reminds us of some of our favorite Moombahton tracks from throughout the years. Munchi especially"
	},
	{
		title: "MOOMBAHTON",
		location: "Miami",
		lat : 24.76,
		lng : -81.19,
		dancers: [
			{
				name: "Kerine Jean-Pierre",
				link: "https://www.instagram.com/lerougepierre"
			}
		],
		credits: [
			{
				title: "DP",
				name: "Karli Evans",
				link: "https://www.instagram.com/allseeingmedia"
			}
		],
		link: "https://youtu.be/Rg6ZaKX3XJE",
		blurb: "A lot of you might recognize this song from hearing it on the Euphoria Tour (it had the Gasolina vocal on it but sadly couldn’t clear that sample for the tape). Moombahton had a big influence on us when we were first starting out and is still a genre we love to play out in Playground Sets. This song feels like an homage to the old Dillon Francis, Munchi, and Porter Robinson. The name is obviously a play off the word moombahton."
	},
	{
		title: "ERROR303",
		location: "Berlin",
		lat : 52.52,
		lng : 13.40,
		dancers: [
			{
				name: "Klara Michel",
				link: "https://www.instagram.com/Klara.oversun"
			}
		],
		credits: [
			{
				title: "DP",
				name: "Andrew White",
				link: "https://www.instagram.com/andrewwhitey"
			}
		],
		link: "https://youtu.be/-z6FCslt-eI",
		blurb: "This song’s video accompaniment is one of Freddy’s favorites from the tape. The dancer with the strobe in the back alley + her outfits and the camera work really feels like a scene from a tv show or just something special. Quite the vibbbe."
	},
	{
		title: "AMSTERDAM (DEEP INSIDE)",
		location: "Amsterdam",
		lat : 52.37,
		lng : 4.9,
		credits: [
			{
				title: "Animators",
				name: "Human Person",
				link: "https://www.instagram.com/humanprsn"
			}
		],
		link: "https://youtu.be/Isd3CJt7E4Q",
		blurb: "When we first started Black Marble this was actually the intro song. We later changed it because this song felt like it took you somewhere else that the other songs didn’t, and we wanted to save that moment for later in the project. That’s part of the reason why we chose to have this song animated in the film. It’s a drastic change that feels like it breathes new life into the tape in the second half."
	},
	{
		title: "GET DOWN!",
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
		],
		credits: [
			{
				title: "DP",
				name: "Luke Piotrowski",
				link: "https://www.instagram.com/luke.pio"
			}
		],
		link: "https://youtu.be/NbVKB6oCDdc",
		blurb: "This song just felt like New York. Pretty early on we had the image of a group of dancers in New York dancing to this song and it turned out so cool in the movie. We sampled “When The Last Time” by Clipse for the “get down” part and ZHU sings the “I know you wanna get down” vocal."
	},
	{
		title: "ECHOLOCATION",
		location: "Los Angeles",
		lat : 34.05,
		lng : -116.24,
		dancers: [
			{
				name: "Trinity Penn",
				link: "https://www.instagram.com/trinitypenn"
			},
			{
				name: "Devin Penn",
				link: "https://www.instagram.com/devinpenn"
			}
		],
		credits: [
			{
				title: "DP",
				name: "Russell Tandy",
				link: "https://www.instagram.com/russelltandy_"
			}
		],
		link: "https://youtu.be/Qy26Ig1A2gI",
		blurb: "This was the last song we made for Black Marble. A lot of the songs on the tape were started before we came up with the idea to have dancers in the film, but this song was made with dance in mind. We love the slow motion parts in the video for this song and the moments where the dancers are in sync with each other."
	},
	{
		title: "WERK THAT BEAT",
		location: "Vancouver",
		lat : 48.29,
		lng : -124.12,
		dancers: [
			{
				name: "Astrid Eckerle",
				link: "https://www.instagram.com/astrideckerle"
			}
		],
		credits: [
			{	title: "DP/Dir",
				name: "Jacob Crawford",
				link: "https://www.instagram.com/jacobcrawfordfilm"
			},
			{	title: "B Camera Operator",
				name: "Bryce MacGregor",
				link: "https://www.instagram.com/brycemacgregor"
			},
			{	title: "Producer",
				name: "Bailey Wood",
				link: "https://www.instagram.com/baileywood____"
			}
		],
		link: "https://youtu.be/OcN_6d75ub8",
		blurb: "This song is just absurd. Absurdity is what it is. I can’t even tell what the lead sound at the drop sounds like, it’s like an airy door stopper being flung back and forth or something, and the breakdancer in the video crushed it! We also sampled the vocals from a really famous song and would be surprised if anyone could figure it out."
	},
	{
		title: "CRUSHED PIECES",
		location: "Los Angeles",
		lat : 34.05,
		lng : -120.24,
		dancers: [
			{
				name: "Jaime Reid",
				link: "https://www.instagram.com/yogerina"
			}
		],
		credits: [
			{
				title: "DP",
				name: "Russell Tandy",
				link: "https://www.instagram.com/russelltandy_"
			}
		],
		link: "https://youtu.be/Q4bm-R8uPzE",
		blurb: "We started this one on a plane ride home from Europe and it’s the fastest song (tempo wise) on the whole project. We love the juxtaposition of this song that’s really heavy and angry with the beauty of a ballet dancer in the film. Juxtaposition is everything."
	},
	{
		title: "L O W L I G H T",
		location: "Los Angeles",
		lat : 33.05,
		lng : -119.24,
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
		],
		credits: [
			{
				title: "DP",
				name: "Russell Tandy",
				link: "https://www.instagram.com/russelltandy_"
			}
		],
		link: "https://youtu.be/jkJwupg4Hl4",
		blurb: "This is the oldest song on Black Marble and was started in 2017 or 2018. It was actually a contender for Candy 2 but didn’t feel like it fit perfectly. We love how this song brings you back down to earth at the end of the project and almost feels like a moment of reflection."
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