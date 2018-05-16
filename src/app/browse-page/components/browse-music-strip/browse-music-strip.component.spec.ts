import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { BrowseMusicStripComponent } from './browse-music-strip.component';
import { BrowseBigCardComponent } from '../browse-big-card/browse-big-card.component';

describe('BrowseMusicStripComponent', () => {
	let component: BrowseMusicStripComponent;
	let fixture: ComponentFixture<BrowseMusicStripComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [RouterTestingModule, HttpClientTestingModule],
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
	});
});
