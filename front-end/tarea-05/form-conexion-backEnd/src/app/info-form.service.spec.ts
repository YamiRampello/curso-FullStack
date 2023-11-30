import { TestBed } from '@angular/core/testing';

import { InfoFormService } from './info-form.service';

describe('InfoFormService', () => {
  let service: InfoFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
