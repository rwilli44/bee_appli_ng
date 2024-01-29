import { TestBed } from '@angular/core/testing';

import { GetHivesService } from './get-hives.service';

describe('GetHivesService', () => {
  let service: GetHivesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetHivesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
