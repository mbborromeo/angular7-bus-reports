import { TestBed } from '@angular/core/testing';

import { BusOrganisationsService } from './bus-organisations.service';

describe('BusOrganisationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BusOrganisationsService = TestBed.get(BusOrganisationsService);
    expect(service).toBeTruthy();
  });
});
