import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PlaylistService } from './playlist.service';

describe('PlaylistService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			providers: [PlaylistService]
		});
	});

	it(
		'should be created',
		inject([PlaylistService], (service: PlaylistService) => {
			expect(service).toBeTruthy();
		})
	);
});
