import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrioritycssComponent } from './prioritycss.component';

describe('PrioritycssComponent', () => {
  let component: PrioritycssComponent;
  let fixture: ComponentFixture<PrioritycssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrioritycssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrioritycssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
