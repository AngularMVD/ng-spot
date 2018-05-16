import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
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
		this.router.navigate(['/playlist']);
	}

	ngOnInit() {
		this.featuredPlaylists = this.playlistService.getAll()
	}
}
