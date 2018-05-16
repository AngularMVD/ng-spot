import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { BrowseGenresMoodsComponent } from './browse-genres-moods.component';
import { BrowseMiniCardComponent } from '../browse-mini-card/browse-mini-card.component';

describe('BrowseGenresMoodsComponent', () => {
	let component: BrowseGenresMoodsComponent;
	let fixture: ComponentFixture<BrowseGenresMoodsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientTestingModule],
			declarations: [BrowseGenresMoodsComponent, BrowseMiniCardComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BrowseGenresMoodsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
