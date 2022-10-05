import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPage1Component } from './angular-page1.component';

describe('AngularPage1Component', () => {
  let component: AngularPage1Component;
  let fixture: ComponentFixture<AngularPage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularPage1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
