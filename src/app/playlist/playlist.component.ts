import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { IFeaturedPlayList } from '../interfaces/IFeaturedPlaylist';

@Component({
	selector: 'app-playlist',
	templateUrl: './playlist.component.html',
	styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
	album: IFeaturedPlayList;
	constructor(private route: ActivatedRoute) {}

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.album = {
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
			}
		});
	}
}
