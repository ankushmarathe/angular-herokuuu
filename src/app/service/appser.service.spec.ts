import { TestBed } from '@angular/core/testing';

import { AppserService } from './appser.service';

describe('AppserService', () => {
  let service: AppserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
