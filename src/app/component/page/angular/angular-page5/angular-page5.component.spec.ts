import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPage5Component } from './angular-page5.component';

describe('AngularPage5Component', () => {
  let component: AngularPage5Component;
  let fixture: ComponentFixture<AngularPage5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularPage5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularPage5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
