import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NivelListaComponent } from './nivel-lista.component';

describe('NivelListaComponent', () => {
  let component: NivelListaComponent;
  let fixture: ComponentFixture<NivelListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NivelListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NivelListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
