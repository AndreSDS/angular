import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoControlComponent } from './campo-control.component';

describe('CampoControlComponent', () => {
  let component: CampoControlComponent;
  let fixture: ComponentFixture<CampoControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampoControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampoControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
