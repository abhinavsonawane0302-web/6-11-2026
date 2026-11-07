import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card27Component } from './card27.component';

describe('Card27Component', () => {
  let component: Card27Component;
  let fixture: ComponentFixture<Card27Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Card27Component]
    });
    fixture = TestBed.createComponent(Card27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
