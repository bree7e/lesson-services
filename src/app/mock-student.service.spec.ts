import { TestBed } from '@angular/core/testing';

import { MockStudentService } from './mock-student.service';

describe('MockStudentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MockStudentService = TestBed.get(MockStudentService);
    expect(service).toBeTruthy();
  });
});
