import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesExampleComponent } from './tables-example.component';

describe('TablesExampleComponent', () => {
  let component: TablesExampleComponent;
  let fixture: ComponentFixture<TablesExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablesExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
