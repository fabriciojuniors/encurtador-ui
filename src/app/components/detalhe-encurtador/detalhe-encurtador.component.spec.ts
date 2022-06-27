import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheEncurtadorComponent } from './detalhe-encurtador.component';

describe('DetalheEncurtadorComponent', () => {
  let component: DetalheEncurtadorComponent;
  let fixture: ComponentFixture<DetalheEncurtadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheEncurtadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheEncurtadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
