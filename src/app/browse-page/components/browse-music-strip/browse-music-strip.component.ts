import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Observable, from } from 'rxjs';
import { take, toArray, switchMap } from 'rxjs/operators';

import { PlaylistService } from '../../../services/playlist/playlist.service';

@Component({
	selector: 'app-browse-music-strip',
	templateUrl: './browse-music-strip.component.html',
	styleUrls: ['./browse-music-strip.component.scss']
})
export class BrowseMusicStripComponent implements OnInit {
	featuredPlaylists: Observable<any>;
	constructor(private router: Router, private playlistService: PlaylistService) { }

	public seePlaylist(event, feature) {
		event.preventDefault();
		this.router.navigate(['/playlist', feature.id]);
	}

	ngOnInit() {
		this.featuredPlaylists = this.playlistService.getAll().pipe(
			switchMap(res => res),
			take(4),
			toArray()
		);
	}
}
