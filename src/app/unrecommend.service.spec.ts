import { TestBed } from '@angular/core/testing';

import { UnrecommendService } from './unrecommend.service';

describe('UnrecommendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UnrecommendService = TestBed.get(UnrecommendService);
    expect(service).toBeTruthy();
  });
});
