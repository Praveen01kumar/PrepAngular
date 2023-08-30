import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatecollComponent } from './createcoll.component';

describe('CreatecollComponent', () => {
  let component: CreatecollComponent;
  let fixture: ComponentFixture<CreatecollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatecollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatecollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
