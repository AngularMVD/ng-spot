import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PlaylistService } from '../services/playlist/playlist.service';
import { PlaylistComponent } from './playlist.component';
import { PlaylistHeaderComponent } from './components/playlist-header/playlist-header.component';
import { PlaylistInfoBarComponent } from './components/playlist-info-bar/playlist-info-bar.component';
import { PlaylistListComponent } from './components/playlist-list/playlist-list.component';

describe('PlaylistComponent', () => {
	let component: PlaylistComponent;
	let fixture: ComponentFixture<PlaylistComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [RouterTestingModule, HttpClientTestingModule],
			providers: [PlaylistService],
			declarations: [PlaylistComponent, PlaylistHeaderComponent, PlaylistInfoBarComponent, PlaylistListComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PlaylistComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
