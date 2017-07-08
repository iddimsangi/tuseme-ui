import { TestBed, inject } from '@angular/core/testing';

import { MwananchiService } from './mwananchi.service';

describe('MwananchiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MwananchiService]
    });
  });

  it('should be created', inject([MwananchiService], (service: MwananchiService) => {
    expect(service).toBeTruthy();
  }));
});
