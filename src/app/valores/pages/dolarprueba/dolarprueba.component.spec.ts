import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DolarpruebaComponent } from './dolarprueba.component';

describe('DolarpruebaComponent', () => {
  let component: DolarpruebaComponent;
  let fixture: ComponentFixture<DolarpruebaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DolarpruebaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DolarpruebaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
