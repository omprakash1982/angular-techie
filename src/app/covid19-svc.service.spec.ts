import { TestBed } from '@angular/core/testing';

import { Covid19SvcService } from './covid19-svc.service';

describe('Covid19SvcService', () => {
  let service: Covid19SvcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Covid19SvcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
