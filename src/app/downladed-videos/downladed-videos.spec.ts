import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownladedVideos } from './downladed-videos';

describe('DownladedVideos', () => {
  let component: DownladedVideos;
  let fixture: ComponentFixture<DownladedVideos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DownladedVideos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownladedVideos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
