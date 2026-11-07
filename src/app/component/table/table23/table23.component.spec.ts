import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Table23Component } from './table23.component';

describe('Table23Component', () => {
  let component: Table23Component;
  let fixture: ComponentFixture<Table23Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Table23Component]
    });
    fixture = TestBed.createComponent(Table23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
