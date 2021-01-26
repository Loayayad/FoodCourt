import { TestBed } from '@angular/core/testing';

import { MealAPIService } from './meal-api.service';

describe('MealAPIService', () => {
  let service: MealAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
