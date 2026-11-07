import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card23Component } from './card23.component';

describe('Card23Component', () => {
  let component: Card23Component;
  let fixture: ComponentFixture<Card23Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Card23Component]
    });
    fixture = TestBed.createComponent(Card23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
