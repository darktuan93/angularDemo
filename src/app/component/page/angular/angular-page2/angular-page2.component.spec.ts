import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPage2Component } from './angular-page2.component';

describe('AngularPage2Component', () => {
  let component: AngularPage2Component;
  let fixture: ComponentFixture<AngularPage2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularPage2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
