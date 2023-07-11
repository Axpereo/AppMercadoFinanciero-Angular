import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { IpcComponent } from './ipc.component';
import { DataService } from '../../services/data.service';
import { TableComponent } from '../../components/table/table.component';
import { GraficoComponent } from '../../components/grafico/grafico.component';

describe('IpcComponent', () => {
  let component: IpcComponent;
  let fixture: ComponentFixture<IpcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ],

      declarations: [
        IpcComponent,
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

    fixture = TestBed.createComponent(IpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
