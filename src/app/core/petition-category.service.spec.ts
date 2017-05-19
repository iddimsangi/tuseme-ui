import { TestBed, inject } from '@angular/core/testing';

import { PetitionCategoryService } from './petition-category.service';

describe('PetitionCategoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PetitionCategoryService]
    });
  });

  it('should ...', inject([PetitionCategoryService], (service: PetitionCategoryService) => {
    expect(service).toBeTruthy();
  }));
});
