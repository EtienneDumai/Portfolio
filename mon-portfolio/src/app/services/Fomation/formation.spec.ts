import { TestBed } from '@angular/core/testing';

import { FormationService } from './formation';

describe('Fomation', () => {
  let service: FormationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
