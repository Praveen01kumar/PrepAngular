import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfbooksComponent } from './pdfbooks.component';

describe('PdfbooksComponent', () => {
  let component: PdfbooksComponent;
  let fixture: ComponentFixture<PdfbooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfbooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdfbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
