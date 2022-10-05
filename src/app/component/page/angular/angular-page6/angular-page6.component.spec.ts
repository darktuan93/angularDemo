import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPage6Component } from './angular-page6.component';

describe('AngularPage6Component', () => {
  let component: AngularPage6Component;
  let fixture: ComponentFixture<AngularPage6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularPage6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularPage6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
