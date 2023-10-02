import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedElementsComponent } from './advanced-elements.component';

describe('AdvancedElementsComponent', () => {
  let component: AdvancedElementsComponent;
  let fixture: ComponentFixture<AdvancedElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvancedElementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvancedElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
