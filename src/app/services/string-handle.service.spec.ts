import { TestBed } from '@angular/core/testing';

import { StringHandleService } from './string-handle.service';

describe('StringHandleService', () => {
  let service: StringHandleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringHandleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
