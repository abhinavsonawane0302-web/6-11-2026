import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Table28Component } from './table28.component';

describe('Table28Component', () => {
  let component: Table28Component;
  let fixture: ComponentFixture<Table28Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Table28Component]
    });
    fixture = TestBed.createComponent(Table28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
