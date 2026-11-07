import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Table16Component } from './table16.component';

describe('Table16Component', () => {
  let component: Table16Component;
  let fixture: ComponentFixture<Table16Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Table16Component]
    });
    fixture = TestBed.createComponent(Table16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
