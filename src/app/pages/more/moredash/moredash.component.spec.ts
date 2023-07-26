import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoredashComponent } from './moredash.component';

describe('MoredashComponent', () => {
  let component: MoredashComponent;
  let fixture: ComponentFixture<MoredashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoredashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoredashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
