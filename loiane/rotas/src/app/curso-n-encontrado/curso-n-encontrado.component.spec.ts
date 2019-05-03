import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoNEncontradoComponent } from './curso-n-encontrado.component';

describe('CursoNEncontradoComponent', () => {
  let component: CursoNEncontradoComponent;
  let fixture: ComponentFixture<CursoNEncontradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoNEncontradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoNEncontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
