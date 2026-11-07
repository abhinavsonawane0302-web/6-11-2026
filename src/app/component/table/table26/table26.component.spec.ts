import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Table26Component } from './table26.component';

describe('Table26Component', () => {
  let component: Table26Component;
  let fixture: ComponentFixture<Table26Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Table26Component]
    });
    fixture = TestBed.createComponent(Table26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
