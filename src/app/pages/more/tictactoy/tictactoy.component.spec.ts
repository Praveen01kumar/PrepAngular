import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TictactoyComponent } from './tictactoy.component';

describe('TictactoyComponent', () => {
  let component: TictactoyComponent;
  let fixture: ComponentFixture<TictactoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TictactoyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TictactoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
