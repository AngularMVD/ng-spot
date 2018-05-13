import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseGenresMoodsComponent } from './browse-genres-moods.component';

describe('BrowseGenresMoodsComponent', () => {
  let component: BrowseGenresMoodsComponent;
  let fixture: ComponentFixture<BrowseGenresMoodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseGenresMoodsComponent ]
    })
    .compileComponents();
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
