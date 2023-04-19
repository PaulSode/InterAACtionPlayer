import { TestBed } from '@angular/core/testing';
import { DefaultService } from './default.service';
import { TranslateModule } from '@ngx-translate/core';
import {HttpClientModule} from "@angular/common/http";

describe('DefaultService', () => {
  let service: DefaultService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ TranslateModule.forRoot(), HttpClientModule]
    });
    service = TestBed.inject(DefaultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
