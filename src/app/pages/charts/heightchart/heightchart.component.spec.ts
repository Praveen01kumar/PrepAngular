import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeightchartComponent } from './heightchart.component';

describe('HeightchartComponent', () => {
  let component: HeightchartComponent;
  let fixture: ComponentFixture<HeightchartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeightchartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeightchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
