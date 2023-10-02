import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsBoardComponent } from './teams-board.component';

describe('TeamsBoardComponent', () => {
  let component: TeamsBoardComponent;
  let fixture: ComponentFixture<TeamsBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamsBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamsBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
