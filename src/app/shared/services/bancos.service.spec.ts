import { TestBed } from '@angular/core/testing';

import { BancosService } from './bancos.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DataService', () => {
  let service: BancosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(BancosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
