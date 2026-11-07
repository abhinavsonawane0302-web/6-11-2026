import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Table29Component } from './table29.component';

describe('Table29Component', () => {
  let component: Table29Component;
  let fixture: ComponentFixture<Table29Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Table29Component]
    });
    fixture = TestBed.createComponent(Table29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
