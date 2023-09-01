/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ToHomeButtonComponent } from './to-home-button.component';

describe('ToHomeButtonComponent', () => {
  let component: ToHomeButtonComponent;
  let fixture: ComponentFixture<ToHomeButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToHomeButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToHomeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
