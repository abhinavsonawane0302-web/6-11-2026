import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card13Component } from './card13.component';

describe('Card13Component', () => {
  let component: Card13Component;
  let fixture: ComponentFixture<Card13Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Card13Component]
    });
    fixture = TestBed.createComponent(Card13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
