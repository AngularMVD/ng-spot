import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseMusicStripComponent } from './browse-music-strip.component';

describe('BrowseMusicStripComponent', () => {
  let component: BrowseMusicStripComponent;
  let fixture: ComponentFixture<BrowseMusicStripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseMusicStripComponent ]
    })
    .compileComponents();
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
