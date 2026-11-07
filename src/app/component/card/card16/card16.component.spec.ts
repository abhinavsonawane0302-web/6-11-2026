import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card16Component } from './card16.component';

describe('Card16Component', () => {
  let component: Card16Component;
  let fixture: ComponentFixture<Card16Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Card16Component]
    });
    fixture = TestBed.createComponent(Card16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
