import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component001Component } from './component001.component';

describe('Component001Component', () => {
  let component: Component001Component;
  let fixture: ComponentFixture<Component001Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Component001Component]
    });
    fixture = TestBed.createComponent(Component001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
