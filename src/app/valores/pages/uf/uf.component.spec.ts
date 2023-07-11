import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { UfComponent } from './uf.component';
import { DataService } from '../../services/data.service';
import { TableComponent } from '../../components/table/table.component';
import { GraficoComponent } from '../../components/grafico/grafico.component';

describe('UfComponent', () => {
  let component: UfComponent;
  let fixture: ComponentFixture<UfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ],

      declarations: [
        UfComponent,
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

    fixture = TestBed.createComponent(UfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
