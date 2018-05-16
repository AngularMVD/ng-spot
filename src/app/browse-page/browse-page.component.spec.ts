import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { BrowsePageComponent } from './browse-page.component';
import { BrowseTopNavComponent } from './components/browse-top-nav/browse-top-nav.component';
import { BrowseMusicStripComponent } from './components/browse-music-strip/browse-music-strip.component';
import { BrowseGenresMoodsComponent } from './components/browse-genres-moods/browse-genres-moods.component';
import { BrowseBigCardComponent } from './components/browse-big-card/browse-big-card.component';
import { BrowseMiniCardComponent } from './components/browse-mini-card/browse-mini-card.component';

describe('BrowsePageComponent', () => {
	let component: BrowsePageComponent;
	let fixture: ComponentFixture<BrowsePageComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [RouterTestingModule, HttpClientTestingModule],
			declarations: [
				BrowsePageComponent,
				BrowseTopNavComponent,
				BrowseMusicStripComponent,
				BrowseGenresMoodsComponent,
				BrowseBigCardComponent,
				BrowseMiniCardComponent
			]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BrowsePageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
