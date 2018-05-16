import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { PlaylistService } from '../services/playlist/playlist.service';
import { IFeaturedPlayList } from '../interfaces/IFeaturedPlaylist';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
	album: Observable<IFeaturedPlayList>;
	constructor(private route: ActivatedRoute, private playlistService: PlaylistService){
	}

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.album = this.playlistService.get(+params['id']);
		});
	}
}
