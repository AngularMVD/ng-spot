import { TestBed, inject } from '@angular/core/testing';

import { UrlServiceService } from './url-service.service';

describe('UrlServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UrlServiceService]
    });
  });

  it('should be created', inject([UrlServiceService], (service: UrlServiceService) => {
    expect(service).toBeTruthy();
  }));
});
