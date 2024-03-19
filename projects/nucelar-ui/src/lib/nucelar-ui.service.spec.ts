import { TestBed } from '@angular/core/testing';

import { NucelarUiService } from './nucelar-ui.service';

describe('NucelarUiService', () => {
  let service: NucelarUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NucelarUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
