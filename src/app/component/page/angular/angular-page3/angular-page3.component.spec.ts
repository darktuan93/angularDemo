import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPage3Component } from './angular-page3.component';

describe('AngularPage3Component', () => {
  let component: AngularPage3Component;
  let fixture: ComponentFixture<AngularPage3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularPage3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularPage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
