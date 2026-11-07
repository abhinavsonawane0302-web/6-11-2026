import { ComponentFixture, TestBed } from '@angular/core/testing';

import { List19Component } from './list19.component';

describe('List19Component', () => {
  let component: List19Component;
  let fixture: ComponentFixture<List19Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [List19Component]
    });
    fixture = TestBed.createComponent(List19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
