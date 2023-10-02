import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditableTablesComponent } from './editable-tables.component';

describe('EditableTablesComponent', () => {
  let component: EditableTablesComponent;
  let fixture: ComponentFixture<EditableTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditableTablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditableTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
