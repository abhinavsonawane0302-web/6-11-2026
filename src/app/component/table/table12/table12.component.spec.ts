import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Table12Component } from './table12.component';

describe('Table12Component', () => {
  let component: Table12Component;
  let fixture: ComponentFixture<Table12Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Table12Component]
    });
    fixture = TestBed.createComponent(Table12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
