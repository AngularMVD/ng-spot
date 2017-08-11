import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseBigCardComponent } from './browse-big-card.component';

describe('BrowseBigCardComponent', () => {
  let component: BrowseBigCardComponent;
  let fixture: ComponentFixture<BrowseBigCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseBigCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseBigCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
