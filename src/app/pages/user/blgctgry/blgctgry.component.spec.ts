import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlgctgryComponent } from './blgctgry.component';

describe('BlgctgryComponent', () => {
  let component: BlgctgryComponent;
  let fixture: ComponentFixture<BlgctgryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlgctgryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlgctgryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
