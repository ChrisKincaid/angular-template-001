import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component002Component } from './component002.component';

describe('Component002Component', () => {
  let component: Component002Component;
  let fixture: ComponentFixture<Component002Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Component002Component]
    });
    fixture = TestBed.createComponent(Component002Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
