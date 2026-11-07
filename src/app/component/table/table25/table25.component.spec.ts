import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Table25Component } from './table25.component';

describe('Table25Component', () => {
  let component: Table25Component;
  let fixture: ComponentFixture<Table25Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Table25Component]
    });
    fixture = TestBed.createComponent(Table25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
