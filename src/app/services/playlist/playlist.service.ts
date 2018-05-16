import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class PlaylistService {
	constructor(public httpClient: HttpClient) { }

	public getAll(): Observable<any> {
		return this.httpClient.get(`${environment.apiUrl}/playlist`);
	}

	public get(id): Observable<any> {
		return this.httpClient.get(`${environment.apiUrl}/playlist/${id}`);
	}

	public getGenres(): Observable<any> {
		return this.httpClient.get(`${environment.apiUrl}/genre`);
	}
}
