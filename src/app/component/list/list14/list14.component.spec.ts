import { ComponentFixture, TestBed } from '@angular/core/testing';

import { List14Component } from './list14.component';

describe('List14Component', () => {
  let component: List14Component;
  let fixture: ComponentFixture<List14Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [List14Component]
    });
    fixture = TestBed.createComponent(List14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
