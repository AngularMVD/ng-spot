import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';

@Component({
	selector: 'app-browse-music-strip',
	templateUrl: './browse-music-strip.component.html',
	styleUrls: ['./browse-music-strip.component.scss']
})
export class BrowseMusicStripComponent implements OnInit {
	featuredPlaylists: any;
	constructor(private router: Router) { }

	public seePlaylist(event, feature) {
		event.preventDefault();
		this.router.navigate(['/playlist', feature.id]);
	}

	ngOnInit() {
		this.featuredPlaylists = [{
			"id": "1",
			"name": "Cafe Libros",
			"image": "assets/featuredPlaylist/1.jpeg",
			"desc": "...y apaga la luz. Las mejores canciones para tus momentos más sensuales.",
			"followers": 172000
		  },
		  {
			"id": "2",
			"name": "Sleep Tight",
			"image": "assets/featuredPlaylist/2.jpeg",
			"desc": "...y apaga la luz. Las mejores canciones para tus momentos más sensuales.",
			"followers": 23455
		  },
		  {
			"id": "3",
			"name": "Sueños",
			"image": "assets/featuredPlaylist/3.jpeg",
			"desc": "...y apaga la luz. Las mejores canciones para tus momentos más sensuales.",
			"followers": 366346
		  },
		  {
			"id": "4",
			"name": "Amor Latino",
			"image": "assets/featuredPlaylist/4.jpeg",
			"desc": "...y apaga la luz. Las mejores canciones para tus momentos más sensuales.",
			"followers": 3457456
		  }]
	}
}
