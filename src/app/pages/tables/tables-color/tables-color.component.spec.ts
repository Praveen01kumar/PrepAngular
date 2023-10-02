import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesColorComponent } from './tables-color.component';

describe('TablesColorComponent', () => {
  let component: TablesColorComponent;
  let fixture: ComponentFixture<TablesColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablesColorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablesColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
