import { TestBed, inject } from '@angular/core/testing';

import { KayaService } from './kaya.service';

describe('KayaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KayaService]
    });
  });

  it('should be created', inject([KayaService], (service: KayaService) => {
    expect(service).toBeTruthy();
  }));
});
