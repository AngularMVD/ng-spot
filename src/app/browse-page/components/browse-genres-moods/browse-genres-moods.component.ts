import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { PlaylistService } from '../../../services/playlist/playlist.service';
import { IGenre } from '../../../interfaces/IGenre';

@Component({
	selector: 'app-browse-genres-moods',
	templateUrl: './browse-genres-moods.component.html',
	styleUrls: ['./browse-genres-moods.component.scss']
})
export class BrowseGenresMoodsComponent implements OnInit {
	genres: Observable<IGenre>;
	constructor(private playlistService: PlaylistService) {}

	ngOnInit() {
		this.genres = this.playlistService.getGenres();
	}
}
