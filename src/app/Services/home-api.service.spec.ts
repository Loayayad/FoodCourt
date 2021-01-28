import { TestBed } from '@angular/core/testing';

import { HomeAPIService } from './home-api.service';

describe('HomeAPIService', () => {
  let service: HomeAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
