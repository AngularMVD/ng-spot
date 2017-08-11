import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseTopNavComponent } from './browse-top-nav.component';

describe('BrowseTopNavComponent', () => {
  let component: BrowseTopNavComponent;
  let fixture: ComponentFixture<BrowseTopNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseTopNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseTopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
