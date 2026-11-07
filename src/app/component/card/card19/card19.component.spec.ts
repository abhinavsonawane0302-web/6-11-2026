import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card19Component } from './card19.component';

describe('Card19Component', () => {
  let component: Card19Component;
  let fixture: ComponentFixture<Card19Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Card19Component]
    });
    fixture = TestBed.createComponent(Card19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
