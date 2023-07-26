import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlgdetailComponent } from './blgdetail.component';

describe('BlgdetailComponent', () => {
  let component: BlgdetailComponent;
  let fixture: ComponentFixture<BlgdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlgdetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlgdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
