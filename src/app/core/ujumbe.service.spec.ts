import { TestBed, inject } from '@angular/core/testing';

import { UjumbeService } from './ujumbe.service';

describe('UjumbeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UjumbeService]
    });
  });

  it('should ...', inject([UjumbeService], (service: UjumbeService) => {
    expect(service).toBeTruthy();
  }));
});
