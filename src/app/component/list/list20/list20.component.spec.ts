import { ComponentFixture, TestBed } from '@angular/core/testing';

import { List20Component } from './list20.component';

describe('List20Component', () => {
  let component: List20Component;
  let fixture: ComponentFixture<List20Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [List20Component]
    });
    fixture = TestBed.createComponent(List20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
