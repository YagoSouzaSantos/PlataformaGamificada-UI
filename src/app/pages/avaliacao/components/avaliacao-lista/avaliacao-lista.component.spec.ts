import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacaoListaComponent } from './avaliacao-lista.component';

describe('AvaliacaoListaComponent', () => {
  let component: AvaliacaoListaComponent;
  let fixture: ComponentFixture<AvaliacaoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvaliacaoListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvaliacaoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
