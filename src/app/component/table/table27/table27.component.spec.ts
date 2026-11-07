import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Table27Component } from './table27.component';

describe('Table27Component', () => {
  let component: Table27Component;
  let fixture: ComponentFixture<Table27Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Table27Component]
    });
    fixture = TestBed.createComponent(Table27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
