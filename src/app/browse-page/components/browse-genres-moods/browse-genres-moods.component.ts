import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Component({
	selector: 'app-browse-genres-moods',
	templateUrl: './browse-genres-moods.component.html',
	styleUrls: ['./browse-genres-moods.component.scss']
})
export class BrowseGenresMoodsComponent implements OnInit {
	genres: Observable<any>;
	constructor(private http: Http) {}

	ngOnInit() {
		this.genres = this.http
			.get('assets/database.json')
			.map(res => res.json().genres);
	}
}
