import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SotialLinkComponent } from './sotial-link.component';

describe('SotialLinkComponent', () => {
  let component: SotialLinkComponent;
  let fixture: ComponentFixture<SotialLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SotialLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SotialLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
