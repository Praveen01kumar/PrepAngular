import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglechartComponent } from './googlechart.component';

describe('GooglechartComponent', () => {
  let component: GooglechartComponent;
  let fixture: ComponentFixture<GooglechartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GooglechartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GooglechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
