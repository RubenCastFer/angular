import { TestBed } from '@angular/core/testing';

import { FraseChuckNorrisService } from './frase-chuck-norris.service';

describe('FraseChuckNorrisService', () => {
  let service: FraseChuckNorrisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FraseChuckNorrisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
