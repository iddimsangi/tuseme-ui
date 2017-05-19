import { TestBed, inject } from '@angular/core/testing';

import { PetitionService } from './petition.service';

describe('PetitionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PetitionService]
    });
  });

  it('should ...', inject([PetitionService], (service: PetitionService) => {
    expect(service).toBeTruthy();
  }));
});
