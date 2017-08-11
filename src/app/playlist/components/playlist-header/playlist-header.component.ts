import { Component, OnInit } from '@angular/core';
import { IFeaturedPlayList } from '../../../interfaces/IFeaturedPlaylist';
import { UrlService } from '../../../services/url/url.service';

@Component({
	selector: 'app-playlist-header',
	templateUrl: './playlist-header.component.html',
	styleUrls: ['./playlist-header.component.scss']
})
export class PlaylistHeaderComponent implements OnInit {
	playlist: IFeaturedPlayList;

	constructor(private url: UrlService) {}

	ngOnInit() {
		this.playlist = this.url.currentParams;
	}
}
