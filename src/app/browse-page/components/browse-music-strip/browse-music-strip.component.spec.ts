import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Observable, from } from 'rxjs';

import { PlaylistService } from '../../../services/playlist/playlist.service';
import { BrowseMusicStripComponent } from './browse-music-strip.component';
import { BrowseBigCardComponent } from '../browse-big-card/browse-big-card.component';

fdescribe('BrowseMusicStripComponent', () => {
	let component: BrowseMusicStripComponent;
	let fixture: ComponentFixture<BrowseMusicStripComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [RouterTestingModule, HttpClientTestingModule],
			providers: [
				{provide: PlaylistService, useClass: MockService}
			],
			declarations: [BrowseMusicStripComponent, BrowseBigCardComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BrowseMusicStripComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();

		expect(fixture.debugElement.nativeElement).toBeTruthy();
	});
});


class MockService {
	getAll() {
		console.info('mock...');
		return from([]);
	}
}
