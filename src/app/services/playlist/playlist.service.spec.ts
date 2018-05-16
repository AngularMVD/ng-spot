import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PlaylistService } from './playlist.service';

describe('PlaylistService', () => {
	let httpClientSpy: { get: jasmine.Spy };
	let service: PlaylistService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule]
		});
	});

	beforeEach(() => {
		httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
  		service = new PlaylistService(<any> httpClientSpy);
	});

	it('should be created', inject([PlaylistService], () => {
		expect(service).toBeTruthy();
	}));

	it('should make the api call', inject([PlaylistService], () => {
		expect(httpClientSpy.get.calls.count()).toBe(0, 'no calls');
		service.getAll();
		expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
	}));
});
