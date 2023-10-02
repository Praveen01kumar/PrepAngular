import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartJSComponent } from './chart-js.component';

describe('ChartJSComponent', () => {
  let component: ChartJSComponent;
  let fixture: ComponentFixture<ChartJSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartJSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
