import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card26Component } from './card26.component';

describe('Card26Component', () => {
  let component: Card26Component;
  let fixture: ComponentFixture<Card26Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Card26Component]
    });
    fixture = TestBed.createComponent(Card26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
