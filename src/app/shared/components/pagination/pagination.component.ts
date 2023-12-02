import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  currentPage: number = 1;
  totalPages: number = 20;
  
  constructor() { }

  ngOnInit(): void {
  }

  get visiblePages(): number[] {
    const range = 1;
    let start = Math.max(1, this.currentPage - range);
    let end = Math.min(this.totalPages, this.currentPage + range);
    if (end - start < (range * 2)) {
      if (start === 1) {
        end = Math.min(end + (range * 2) - (end - start), this.totalPages);
      } else if (end === this.totalPages) { start = Math.max(start - (range * 2) + (end - start), 1); }
    }
    return Array.from({ length: end - start + 1 }, (_, i) => i + start);
  }

  previousPage() { if (this.currentPage > 1) { this.currentPage--; } }
  nextPage() { if (this.currentPage < this.totalPages) { this.currentPage++; } }
  goToPage(page: number) { this.currentPage = page; }
  fistPage(page: number) { this.currentPage = page; }
  lastPage(page: number) { this.currentPage = page; }


}
