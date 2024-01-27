import { Component, OnInit } from '@angular/core';

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


  constructor() { }

  ngOnInit(): void {
  }

  zoomPage(idv: string) {
    if (idv === '-') {
      if (this.pageZoom > 0.2) {
        this.pageZoom = this.pageZoom - 0.1;
      }
    }
    if (idv === '+') {
      if (this.pageZoom < 1) {
        this.pageZoom = this.pageZoom + 0.1;
      }
    }
  }
  zoomScale(scale: string) {
    this.pageScale = scale;
  }

  originalSize() {
    this.pageOrgSize = !this.pageOrgSize;
  }

  showAll() {
    this.pageAll = !this.pageAll;
  }

  renderText() {
    this.pageText = !this.pageText;
  }

  nextPage() {
    this.pageNumber++;
  }

  previousPage() {
    if (this.pageNumber > 1) {
      this.pageNumber--;
    }
  }

  afterLoadComplete(pdf: any) {
    console.log('after-load-complete');
  }

  pageRendered(e: CustomEvent) {
    console.log('(page-rendered)', e);
  }

  textLayerRendered(e: CustomEvent) {
    console.log('(text-layer-rendered)', e);
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
