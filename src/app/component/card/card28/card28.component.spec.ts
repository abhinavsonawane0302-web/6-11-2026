import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card28Component } from './card28.component';

describe('Card28Component', () => {
  let component: Card28Component;
  let fixture: ComponentFixture<Card28Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Card28Component]
    });
    fixture = TestBed.createComponent(Card28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
