import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Table30Component } from './table30.component';

describe('Table30Component', () => {
  let component: Table30Component;
  let fixture: ComponentFixture<Table30Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Table30Component]
    });
    fixture = TestBed.createComponent(Table30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
