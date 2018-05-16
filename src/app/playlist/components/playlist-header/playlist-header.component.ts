import { Component, OnInit, Input } from '@angular/core';
import { IFeaturedPlayList } from '../../../interfaces/IFeaturedPlaylist';

@Component({
	selector: 'app-playlist-header',
	templateUrl: './playlist-header.component.html',
	styleUrls: ['./playlist-header.component.scss']
})
export class PlaylistHeaderComponent implements OnInit {
	@Input() album: IFeaturedPlayList;

	ngOnInit() {}
}
