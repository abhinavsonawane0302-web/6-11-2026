import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Table18Component } from './table18.component';

describe('Table18Component', () => {
  let component: Table18Component;
  let fixture: ComponentFixture<Table18Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Table18Component]
    });
    fixture = TestBed.createComponent(Table18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
