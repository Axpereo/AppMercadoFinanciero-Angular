import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavtabComponent } from './navtab.component';
import { DropdownMenuComponent } from '../dropdown-menu/dropdown-menu.component';

describe('NavtabComponent', () => {
  let component: NavtabComponent;
  let fixture: ComponentFixture<NavtabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        NavtabComponent,
        DropdownMenuComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavtabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
