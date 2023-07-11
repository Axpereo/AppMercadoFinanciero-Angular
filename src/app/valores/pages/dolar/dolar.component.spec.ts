import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { DolarComponent } from './dolar.component';
import { TableComponent } from '../../components/table/table.component';
import { GraficoComponent } from '../../components/grafico/grafico.component';
import { DataService } from '../../services/data.service';

describe('DolarComponent', () => {
  let component: DolarComponent;
  let fixture: ComponentFixture<DolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ],

      declarations: [ 
        DolarComponent,
        TableComponent,
        GraficoComponent 
      ],

      providers: [
        DataService
      ],

      schemas:[
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
