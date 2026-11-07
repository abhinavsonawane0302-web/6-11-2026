import { ComponentFixture, TestBed } from '@angular/core/testing';

import { List18Component } from './list18.component';

describe('List18Component', () => {
  let component: List18Component;
  let fixture: ComponentFixture<List18Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [List18Component]
    });
    fixture = TestBed.createComponent(List18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
