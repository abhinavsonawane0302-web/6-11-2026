import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Table24Component } from './table24.component';

describe('Table24Component', () => {
  let component: Table24Component;
  let fixture: ComponentFixture<Table24Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Table24Component]
    });
    fixture = TestBed.createComponent(Table24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
