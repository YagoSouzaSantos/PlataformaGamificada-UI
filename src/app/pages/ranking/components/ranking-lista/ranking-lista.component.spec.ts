/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RankingListaComponent } from './ranking-lista.component';

describe('RankingListaComponent', () => {
  let component: RankingListaComponent;
  let fixture: ComponentFixture<RankingListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
