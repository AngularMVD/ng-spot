import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UrlService } from '../../../services/url/url.service';

@Component({
	selector: 'app-browse-music-strip',
	templateUrl: './browse-music-strip.component.html',
	styleUrls: ['./browse-music-strip.component.scss']
})
export class BrowseMusicStripComponent implements OnInit {
	featuredPlaylists: Observable<any>;
	constructor(private http: Http, private router: Router, private url: UrlService) {}

	public seePlaylist(event, feature) {
		event.preventDefault();
		this.url.currentParams = feature;
		this.router.navigate(['/playlist']);
	}

	ngOnInit() {
		this.featuredPlaylists = this.http
			.get('assets/database.json')
			.switchMap(res => Observable.from(res.json().featuredPlaylists))
			.take(4)
			.toArray();
	}
}
