import { Component, OnInit, ViewChild } from '@angular/core';
import { PdfViewerComponent } from 'ng2-pdf-viewer';
@Component({
  selector: 'pdfbooks',
  templateUrl: './pdfbooks.component.html',
  styleUrls: ['./pdfbooks.component.scss']
})
export class PdfbooksComponent implements OnInit {

  pdfSrc = "";
  pageNumber: number = 1;
  pageZoom: number = 1;
  pageScale: any = 'page-height';
  pageOrgSize: boolean = false;
  pageAll: boolean = false;
  pageText: boolean = true;
  @ViewChild(PdfViewerComponent, { static: false }) private pdfComponent?: PdfViewerComponent | undefined;
  searchQuery: string = '';
  maxPageValue: number | null = null;

  constructor() { }

  ngOnInit(): void { }

  goToPage(event: any) {
    const enteredValue = parseInt(event.target.value, 10);
    if (this.maxPageValue !== null) {
      if (!isNaN(enteredValue)) { if (enteredValue >= this.maxPageValue) { this.pageNumber = this.maxPageValue; } else { this.pageNumber = enteredValue; } };
      if (isNaN(enteredValue)) { this.pageNumber = 1; };
    }
  }

  searchInPdf() {
    if (this.pdfComponent) {
      this.pdfComponent.eventBus.dispatch('find', {
        query: this.searchQuery, type: 'again', caseSensitive: true, findPrevious: undefined, highlightAll: true, phraseSearch: true
      });
    }
  }

  zoomPage(idv: string) {
    if (idv === '-') { if (this.pageZoom > 0.2) { this.pageZoom = this.pageZoom - 0.1; } };
    if (idv === '+') { if (this.pageZoom < 1) { this.pageZoom = this.pageZoom + 0.1; } };
  }

  zoomScale(scale: string) { this.pageScale = scale; };
  originalSize() { this.pageOrgSize = !this.pageOrgSize; };
  showAll() { this.pageAll = !this.pageAll; };
  renderText() { this.pageText = !this.pageText; };
  nextPage() { this.pageNumber++; };
  previousPage() { if (this.pageNumber > 1) { this.pageNumber--; } };

  afterLoadComplete(pdf: any): void {
    this.maxPageValue = pdf.numPages;
    console.log('after-load-complete', pdf);
  }

  pageRendered(page: CustomEvent) {
    console.log('(page-rendered)', page);
  }

  textLayerRendered(rendered: CustomEvent) {
    console.log('(text-layer-rendered)', rendered);
  }

  onFileSelected(event: any) {
    const file = event?.target?.files;
    if (file && file[0]) {
      const reader = new FileReader();
      reader.onload = (e: any) => { this.pdfSrc = e?.target?.result; }
      reader.readAsArrayBuffer(file[0]);
    }
  }

}
