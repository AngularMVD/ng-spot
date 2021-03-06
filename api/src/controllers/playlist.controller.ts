import { JsonController, Param, Body, Get, Post, Put, Delete } from 'routing-controllers';

@JsonController()
export class PlaylistController {

	@Get('/playlist')
	getAll() {
		return this.data.map(p => ({
			id: p.id,
			name: p.name,
			image: p.image,
			desc: p.desc,
			followers: p.followers
		}));
	}

	@Get('/playlist/:id')
	get(@Param("id") id: any) {
		const album = this.data.find(p => p.id == id);
		return album || [];
	}

	private data = [{
		"id": "1",
		"name": "Cafe Libros",
		"image": "assets/featuredPlaylist/1.jpeg",
		"desc": "...y apaga la luz. Las mejores canciones para tus momentos más sensuales.",
		"followers": 172000,
		"playlist": [
		{
			"song": "Twins",
			"artist": "matt Kivel",
			"album": "days of being Wild",
			"duration": "00:40"
		},
		{
			"song": "Elf River",
			"artist": "Six Shoots",
			"album": "For Octavio Paz",
			"duration": "03:11"
		},
		{
			"song": "Itasca",
			"artist": "Paul Brothers",
			"album": "Borderline EP",
			"duration": "02:48"
		},
		{
			"song": "Lost Lula",
			"artist": "Sea wolf",
			"album": "Long Gone Out",
			"duration": "03:34"
		},
		{
			"song": "Quiet Voices",
			"artist": "David Guetta",
			"album": "Snapshot true",
			"duration": "04:52"
		},
		{
			"song": "The wanting",
			"artist": "Blake Mills",
			"album": "Heigh Ho",
			"duration": "03:22"
		}
		]
	},
	{
		"id": "2",
		"name": "Sleep Tight",
		"image": "assets/featuredPlaylist/2.jpeg",
		"desc": "...y apaga la luz. Las mejores canciones para tus momentos más sensuales.",
		"followers": 23455,
		"playlist": [
		{
			"song": "Twins",
			"artist": "matt Kivel",
			"album": "days of being Wild",
			"duration": "00:40"
		},
		{
			"song": "Elf River",
			"artist": "Six Shoots",
			"album": "For Octavio Paz",
			"duration": "03:11"
		},
		{
			"song": "Itasca",
			"artist": "Paul Brothers",
			"album": "Borderline EP",
			"duration": "02:48"
		},
		{
			"song": "Lost Lula",
			"artist": "Sea wolf",
			"album": "Long Gone Out",
			"duration": "03:34"
		},
		{
			"song": "Quiet Voices",
			"artist": "David Guetta",
			"album": "Snapshot true",
			"duration": "04:52"
		},
		{
			"song": "The wanting",
			"artist": "Blake Mills",
			"album": "Heigh Ho",
			"duration": "03:22"
		}
		]
	},
	{
		"id": "3",
		"name": "Sueños",
		"image": "assets/featuredPlaylist/3.jpeg",
		"desc": "...y apaga la luz. Las mejores canciones para tus momentos más sensuales.",
		"followers": 366346,
		"playlist": [
		{
			"song": "Twins",
			"artist": "matt Kivel",
			"album": "days of being Wild",
			"duration": "00:40"
		},
		{
			"song": "Elf River",
			"artist": "Six Shoots",
			"album": "For Octavio Paz",
			"duration": "03:11"
		},
		{
			"song": "Itasca",
			"artist": "Paul Brothers",
			"album": "Borderline EP",
			"duration": "02:48"
		},
		{
			"song": "Lost Lula",
			"artist": "Sea wolf",
			"album": "Long Gone Out",
			"duration": "03:34"
		},
		{
			"song": "Quiet Voices",
			"artist": "David Guetta",
			"album": "Snapshot true",
			"duration": "04:52"
		},
		{
			"song": "The wanting",
			"artist": "Blake Mills",
			"album": "Heigh Ho",
			"duration": "03:22"
		}
		]
	},
	{
		"id": "4",
		"name": "Amor Latino",
		"image": "assets/featuredPlaylist/4.jpeg",
		"desc": "...y apaga la luz. Las mejores canciones para tus momentos más sensuales.",
		"followers": 3457456,
		"playlist": [
		{
			"song": "Twins",
			"artist": "matt Kivel",
			"album": "days of being Wild",
			"duration": "00:40"
		},
		{
			"song": "Elf River",
			"artist": "Six Shoots",
			"album": "For Octavio Paz",
			"duration": "03:11"
		},
		{
			"song": "Itasca",
			"artist": "Paul Brothers",
			"album": "Borderline EP",
			"duration": "02:48"
		},
		{
			"song": "Lost Lula",
			"artist": "Sea wolf",
			"album": "Long Gone Out",
			"duration": "03:34"
		},
		{
			"song": "Quiet Voices",
			"artist": "David Guetta",
			"album": "Snapshot true",
			"duration": "04:52"
		},
		{
			"song": "The wanting",
			"artist": "Blake Mills",
			"album": "Heigh Ho",
			"duration": "03:22"
		}
		]
	},
	{
		"id": "5",
		"name": "Cierra la puerta",
		"image": "assets/featuredPlaylist/5.jpeg",
		"desc": "...y apaga la luz. Las mejores canciones para tus momentos más sensuales.",
		"followers": 23443,
		"playlist": [
		{
			"song": "Twins",
			"artist": "matt Kivel",
			"album": "days of being Wild",
			"duration": "00:40"
		},
		{
			"song": "Elf River",
			"artist": "Six Shoots",
			"album": "For Octavio Paz",
			"duration": "03:11"
		},
		{
			"song": "Itasca",
			"artist": "Paul Brothers",
			"album": "Borderline EP",
			"duration": "02:48"
		},
		{
			"song": "Lost Lula",
			"artist": "Sea wolf",
			"album": "Long Gone Out",
			"duration": "03:34"
		},
		{
			"song": "Quiet Voices",
			"artist": "David Guetta",
			"album": "Snapshot true",
			"duration": "04:52"
		},
		{
			"song": "The wanting",
			"artist": "Blake Mills",
			"album": "Heigh Ho",
			"duration": "03:22"
		}
		]
	},
	{
		"id": "6",
		"name": "Clásicos de fogata",
		"image": "assets/featuredPlaylist/6.jpeg",
		"desc": "...y apaga la luz. Las mejores canciones para tus momentos más sensuales.",
		"followers": 357897,
		"playlist": [
		{
			"song": "Twins",
			"artist": "matt Kivel",
			"album": "days of being Wild",
			"duration": "00:40"
		},
		{
			"song": "Elf River",
			"artist": "Six Shoots",
			"album": "For Octavio Paz",
			"duration": "03:11"
		},
		{
			"song": "Itasca",
			"artist": "Paul Brothers",
			"album": "Borderline EP",
			"duration": "02:48"
		},
		{
			"song": "Lost Lula",
			"artist": "Sea wolf",
			"album": "Long Gone Out",
			"duration": "03:34"
		},
		{
			"song": "Quiet Voices",
			"artist": "David Guetta",
			"album": "Snapshot true",
			"duration": "04:52"
		},
		{
			"song": "The wanting",
			"artist": "Blake Mills",
			"album": "Heigh Ho",
			"duration": "03:22"
		}
		]
	},
	{
		"id": "7",
		"name": "Noctámbulo",
		"image": "assets/featuredPlaylist/7.jpeg",
		"desc": "...y apaga la luz. Las mejores canciones para tus momentos más sensuales.",
		"followers": 78997,
		"playlist": [
		{
			"song": "Twins",
			"artist": "matt Kivel",
			"album": "days of being Wild",
			"duration": "00:40"
		},
		{
			"song": "Elf River",
			"artist": "Six Shoots",
			"album": "For Octavio Paz",
			"duration": "03:11"
		},
		{
			"song": "Itasca",
			"artist": "Paul Brothers",
			"album": "Borderline EP",
			"duration": "02:48"
		},
		{
			"song": "Lost Lula",
			"artist": "Sea wolf",
			"album": "Long Gone Out",
			"duration": "03:34"
		},
		{
			"song": "Quiet Voices",
			"artist": "David Guetta",
			"album": "Snapshot true",
			"duration": "04:52"
		},
		{
			"song": "The wanting",
			"artist": "Blake Mills",
			"album": "Heigh Ho",
			"duration": "03:22"
		}
		]
	},
	{
		"id": "8",
		"name": "Orgullo histórico",
		"image": "assets/featuredPlaylist/8.jpeg",
		"desc": "...y apaga la luz. Las mejores canciones para tus momentos más sensuales.",
		"followers": 456888,
		"playlist": [
		{
			"song": "Twins",
			"artist": "matt Kivel",
			"album": "days of being Wild",
			"duration": "00:40"
		},
		{
			"song": "Elf River",
			"artist": "Six Shoots",
			"album": "For Octavio Paz",
			"duration": "03:11"
		},
		{
			"song": "Itasca",
			"artist": "Paul Brothers",
			"album": "Borderline EP",
			"duration": "02:48"
		},
		{
			"song": "Lost Lula",
			"artist": "Sea wolf",
			"album": "Long Gone Out",
			"duration": "03:34"
		},
		{
			"song": "Quiet Voices",
			"artist": "David Guetta",
			"album": "Snapshot true",
			"duration": "04:52"
		},
		{
			"song": "The wanting",
			"artist": "Blake Mills",
			"album": "Heigh Ho",
			"duration": "03:22"
		}
		]
	},
	{
		"id": "9",
		"name": "Descanso Infinito",
		"image": "assets/featuredPlaylist/9.jpeg",
		"desc": "...y apaga la luz. Las mejores canciones para tus momentos más sensuales.",
		"followers": 978969,
		"playlist": [
		{
			"song": "Twins",
			"artist": "matt Kivel",
			"album": "days of being Wild",
			"duration": "00:40"
		},
		{
			"song": "Elf River",
			"artist": "Six Shoots",
			"album": "For Octavio Paz",
			"duration": "03:11"
		},
		{
			"song": "Itasca",
			"artist": "Paul Brothers",
			"album": "Borderline EP",
			"duration": "02:48"
		},
		{
			"song": "Lost Lula",
			"artist": "Sea wolf",
			"album": "Long Gone Out",
			"duration": "03:34"
		},
		{
			"song": "Quiet Voices",
			"artist": "David Guetta",
			"album": "Snapshot true",
			"duration": "04:52"
		},
		{
			"song": "The wanting",
			"artist": "Blake Mills",
			"album": "Heigh Ho",
			"duration": "03:22"
		}
		]
	},
	{
		"id": "10",
		"name": "Bajo las estrellas",
		"image": "assets/featuredPlaylist/10.jpeg",
		"desc": "...y apaga la luz. Las mejores canciones para tus momentos más sensuales.",
		"followers": 678768,
		"playlist": [
		{
			"song": "Twins",
			"artist": "matt Kivel",
			"album": "days of being Wild",
			"duration": "00:40"
		},
		{
			"song": "Elf River",
			"artist": "Six Shoots",
			"album": "For Octavio Paz",
			"duration": "03:11"
		},
		{
			"song": "Itasca",
			"artist": "Paul Brothers",
			"album": "Borderline EP",
			"duration": "02:48"
		},
		{
			"song": "Lost Lula",
			"artist": "Sea wolf",
			"album": "Long Gone Out",
			"duration": "03:34"
		},
		{
			"song": "Quiet Voices",
			"artist": "David Guetta",
			"album": "Snapshot true",
			"duration": "04:52"
		},
		{
			"song": "The wanting",
			"artist": "Blake Mills",
			"album": "Heigh Ho",
			"duration": "03:22"
		}
		]
	}];
}
