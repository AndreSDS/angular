import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaheComponent } from './detahe.component';

describe('DetaheComponent', () => {
  let component: DetaheComponent;
  let fixture: ComponentFixture<DetaheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
