import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {
  docFilter: any;
  documentList: any[] = [
    { docicon: "bi bi-file-earmark-bar-graph", doccolor:"#f3ad06", docname: "sdfsd.xls", docsize: "Size: 462KB", docdate: "Nov 02, 2019" },
    { docicon: "bi bi-file-earmark", doccolor:"#00800080", docname: "Document_2017.doc", docsize: "Size: 02KB", docdate: "Nov 02, 2017" },
    { docicon: "bi bi-file-earmark", doccolor:"#00800080", docname: "sdfsdf2323.doc", docsize: "Size: 56KB", docdate: "Nov 02, 2018" },
    { docicon: "bi bi-file-earmark-bar-graph", doccolor:"#f3ad06", docname: "Report2016.xls", docsize: "Size: 45KB", docdate: "Nov 02, 2016" },
    { docicon: "bi bi-file-earmark", doccolor:"#00800080", docname: "Document_2017.doc", docsize: "Size: 12KB", docdate: "Nov 02, 2017" },
    { docicon: "bi bi-file-earmark-text", doccolor:"#ff000080", docname: "asdf  hhkj.pdf", docsize: "Size: 89KB", docdate: "Nov 02, 2013" },
    { docicon: "bi bi-file-ppt", doccolor:"#0000ff80", docname: "dfsdfwewe.ppt", docsize: "Size: 42KB", docdate: "Nov 02, 2017" },
    { docicon: "bi bi-file-earmark", doccolor:"#00800080", docname: "Document_2017.doc", docsize: "Size: 02MB", docdate: "Nov 02, 2019" },
    { docicon: "bi bi-file-earmark", doccolor:"#00800080", docname: "dfdfg34.doc", docsize: "Size: 40KB", docdate: "Nov 02, 2020" },
    { docicon: "bi bi-file-earmark-bar-graph", doccolor:"#f3ad06", docname: "sdfsd.xls", docsize: "Size: 462KB", docdate: "Nov 02, 2019" },
    { docicon: "bi bi-file-earmark", doccolor:"#00800080", docname: "Document_2017.doc", docsize: "Size: 02KB", docdate: "Nov 02, 2017" },
    { docicon: "bi bi-file-earmark", doccolor:"#00800080", docname: "sdfsdf2323.doc", docsize: "Size: 56KB", docdate: "Nov 02, 2018" },
    { docicon: "bi bi-file-earmark-bar-graph", doccolor:"#f3ad06", docname: "Report2016.xls", docsize: "Size: 45KB", docdate: "Nov 02, 2016" },
    { docicon: "bi bi-file-earmark", doccolor:"#00800080", docname: "Document_2017.doc", docsize: "Size: 12KB", docdate: "Nov 02, 2017" },
    { docicon: "bi bi-file-earmark-text", doccolor:"#ff000080", docname: "asdf  hhkj.pdf", docsize: "Size: 89KB", docdate: "Nov 02, 2013" },
    { docicon: "bi bi-file-ppt", doccolor:"#0000ff80", docname: "dfsdfwewe.ppt", docsize: "Size: 42KB", docdate: "Nov 02, 2017" },
    { docicon: "bi bi-file-earmark", doccolor:"#00800080", docname: "Document_2017.doc", docsize: "Size: 02MB", docdate: "Nov 02, 2019" },
    { docicon: "bi bi-file-earmark", doccolor:"#00800080", docname: "dfdfg34.doc", docsize: "Size: 40KB", docdate: "Nov 02, 2020" },
  ]
  constructor() { }
 
  ngOnInit(): void {
    this.docFilter = this.documentList;
  }
  searchDoc(event: any) {
    this.documentList = this.docFilter;
    this.documentList = this.documentList?.filter(i => (i?.docname)?.toLowerCase()?.indexOf((event?.target as HTMLInputElement)?.value?.toLocaleLowerCase()) !== -1);
  }
}
