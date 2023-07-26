import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapuiComponent } from './bootstrapui.component';

describe('BootstrapuiComponent', () => {
  let component: BootstrapuiComponent;
  let fixture: ComponentFixture<BootstrapuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootstrapuiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BootstrapuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
