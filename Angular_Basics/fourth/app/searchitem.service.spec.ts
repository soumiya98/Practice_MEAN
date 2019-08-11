import { TestBed } from '@angular/core/testing';

import { SearchitemService } from './searchitem.service';

describe('SearchitemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchitemService = TestBed.get(SearchitemService);
    expect(service).toBeTruthy();
  });
});
