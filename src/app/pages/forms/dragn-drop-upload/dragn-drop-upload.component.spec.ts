import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragnDropUploadComponent } from './dragn-drop-upload.component';

describe('DragnDropUploadComponent', () => {
  let component: DragnDropUploadComponent;
  let fixture: ComponentFixture<DragnDropUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragnDropUploadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragnDropUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
