import { TestBed } from '@angular/core/testing';

import { PetvaysServiceService } from './petvays-service.service';

describe('PetvaysServiceService', () => {
  let service: PetvaysServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetvaysServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
