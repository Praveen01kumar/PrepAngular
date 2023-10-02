import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabledraggerComponent } from './tabledragger.component';

describe('TabledraggerComponent', () => {
  let component: TabledraggerComponent;
  let fixture: ComponentFixture<TabledraggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabledraggerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabledraggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
