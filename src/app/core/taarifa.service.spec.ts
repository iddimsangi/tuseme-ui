import { TestBed, inject } from '@angular/core/testing';
import { TaarifaService } from './taarifa.service';

describe('TaarifaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaarifaService]
    });
  });

  it('should ...', inject([TaarifaService], (service: TaarifaService) => {
    expect(service).toBeTruthy();
  }));
});
