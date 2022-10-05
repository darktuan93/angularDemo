import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPage4Component } from './angular-page4.component';

describe('AngularPage4Component', () => {
  let component: AngularPage4Component;
  let fixture: ComponentFixture<AngularPage4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularPage4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularPage4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
