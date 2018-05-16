import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistHeaderComponent } from './playlist-header.component';

describe('PlaylistHeaderComponent', () => {
  let component: PlaylistHeaderComponent;
  let fixture: ComponentFixture<PlaylistHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
	  declarations: [ PlaylistHeaderComponent ],
	  providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
