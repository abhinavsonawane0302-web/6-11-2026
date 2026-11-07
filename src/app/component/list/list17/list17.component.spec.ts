import { ComponentFixture, TestBed } from '@angular/core/testing';

import { List17Component } from './list17.component';

describe('List17Component', () => {
  let component: List17Component;
  let fixture: ComponentFixture<List17Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [List17Component]
    });
    fixture = TestBed.createComponent(List17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
