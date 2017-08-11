import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseMiniCardComponent } from './browse-mini-card.component';

describe('BrowseMiniCardComponent', () => {
  let component: BrowseMiniCardComponent;
  let fixture: ComponentFixture<BrowseMiniCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseMiniCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseMiniCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
