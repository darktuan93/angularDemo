import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypePage3Component } from './type-page3.component';

describe('TypePage3Component', () => {
  let component: TypePage3Component;
  let fixture: ComponentFixture<TypePage3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypePage3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypePage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
