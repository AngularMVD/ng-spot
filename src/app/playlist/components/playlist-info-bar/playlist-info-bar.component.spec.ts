import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistInfoBarComponent } from './playlist-info-bar.component';

describe('PlaylistInfoBarComponent', () => {
  let component: PlaylistInfoBarComponent;
  let fixture: ComponentFixture<PlaylistInfoBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaylistInfoBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistInfoBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
