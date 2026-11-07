import { ComponentFixture, TestBed } from '@angular/core/testing';

import { List28Component } from './list28.component';

describe('List28Component', () => {
  let component: List28Component;
  let fixture: ComponentFixture<List28Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [List28Component]
    });
    fixture = TestBed.createComponent(List28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
