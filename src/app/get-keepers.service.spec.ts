import { TestBed } from '@angular/core/testing';

import { GetKeepersService } from './get-keepers.service';

describe('GetKeepersService', () => {
  let service: GetKeepersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetKeepersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
