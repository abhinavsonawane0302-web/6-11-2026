import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card21Component } from './card21.component';

describe('Card21Component', () => {
  let component: Card21Component;
  let fixture: ComponentFixture<Card21Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Card21Component]
    });
    fixture = TestBed.createComponent(Card21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
