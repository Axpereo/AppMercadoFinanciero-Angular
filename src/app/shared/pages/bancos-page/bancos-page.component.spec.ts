import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BancosPageComponent } from './bancos-page.component';

describe('BancosPageComponent', () => {
  let component: BancosPageComponent;
  let fixture: ComponentFixture<BancosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BancosPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BancosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
