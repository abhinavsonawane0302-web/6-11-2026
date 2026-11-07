import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Table22Component } from './table22.component';

describe('Table22Component', () => {
  let component: Table22Component;
  let fixture: ComponentFixture<Table22Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Table22Component]
    });
    fixture = TestBed.createComponent(Table22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
