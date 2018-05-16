import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import { toArray } from 'rxjs/operators';

import { ISong } from '../../../interfaces/IFeaturedPlaylist';

@Component({
	selector: 'app-playlist-list',
	templateUrl: './playlist-list.component.html',
	styleUrls: ['./playlist-list.component.scss']
})
export class PlaylistListComponent implements OnInit {
	@Input() playlist: Array<ISong>;

	ngOnInit() {}
}
