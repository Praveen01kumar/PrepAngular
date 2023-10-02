import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JqueryDatatablesComponent } from './jquery-datatables.component';

describe('JqueryDatatablesComponent', () => {
  let component: JqueryDatatablesComponent;
  let fixture: ComponentFixture<JqueryDatatablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JqueryDatatablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JqueryDatatablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
