import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M2chartComponent } from './m2chart.component';

describe('M2chartComponent', () => {
  let component: M2chartComponent;
  let fixture: ComponentFixture<M2chartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M2chartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(M2chartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
