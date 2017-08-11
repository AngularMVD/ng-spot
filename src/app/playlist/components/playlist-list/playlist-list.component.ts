import { Component, OnInit } from '@angular/core';
import { UrlService } from '../../../services/url/url.service';
import { ISong } from '../../../interfaces/IFeaturedPlaylist';

@Component({
	selector: 'app-playlist-list',
	templateUrl: './playlist-list.component.html',
	styleUrls: ['./playlist-list.component.scss']
})
export class PlaylistListComponent implements OnInit {
	list: Array<ISong>;
	constructor(private url: UrlService){
	}

	ngOnInit() {
		this.list = this.url.currentParams.playlist;
	}
}
