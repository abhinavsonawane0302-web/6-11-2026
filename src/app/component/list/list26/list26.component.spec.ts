import { ComponentFixture, TestBed } from '@angular/core/testing';

import { List26Component } from './list26.component';

describe('List26Component', () => {
  let component: List26Component;
  let fixture: ComponentFixture<List26Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [List26Component]
    });
    fixture = TestBed.createComponent(List26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
