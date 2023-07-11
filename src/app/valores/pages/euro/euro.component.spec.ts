import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { EuroComponent } from './euro.component';
import { TableComponent } from '../../components/table/table.component';
import { GraficoComponent } from '../../components/grafico/grafico.component';
import { DataService } from '../../services/data.service';

describe('EuroComponent', () => {
  let component: EuroComponent;
  let fixture: ComponentFixture<EuroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ],

      declarations: [
        EuroComponent,
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

    fixture = TestBed.createComponent(EuroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
