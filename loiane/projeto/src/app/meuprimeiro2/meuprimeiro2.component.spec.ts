import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Meuprimeiro2Component } from './meuprimeiro2.component';

describe('Meuprimeiro2Component', () => {
  let component: Meuprimeiro2Component;
  let fixture: ComponentFixture<Meuprimeiro2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Meuprimeiro2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Meuprimeiro2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
