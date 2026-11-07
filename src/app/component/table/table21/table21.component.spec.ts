import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Table21Component } from './table21.component';

describe('Table21Component', () => {
  let component: Table21Component;
  let fixture: ComponentFixture<Table21Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Table21Component]
    });
    fixture = TestBed.createComponent(Table21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
