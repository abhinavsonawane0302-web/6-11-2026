import { ComponentFixture, TestBed } from '@angular/core/testing';

import { List22Component } from './list22.component';

describe('List22Component', () => {
  let component: List22Component;
  let fixture: ComponentFixture<List22Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [List22Component]
    });
    fixture = TestBed.createComponent(List22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
