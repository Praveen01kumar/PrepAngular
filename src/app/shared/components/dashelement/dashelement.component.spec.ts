import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashelementComponent } from './dashelement.component';

describe('DashelementComponent', () => {
  let component: DashelementComponent;
  let fixture: ComponentFixture<DashelementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashelementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
