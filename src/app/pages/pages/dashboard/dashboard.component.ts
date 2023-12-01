import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  catagArr: any[] = [
    { name: 'Blank Page', url: 'bpage' },
    { name: 'Profile', url: 'profile' },
    { name: 'Image Gallery', url: 'images' },
    { name: 'Timeline', url: 'timeline' },
    { name: 'Horizontal Timeline', url: 'htimeline' },
    { name: 'Pricing', url: 'pricing' },
    { name: 'Invoices', url: 'invoices' },
    { name: 'Search Results', url: 'sresult' },
    { name: 'Helper Classes', url: 'hclasses' },
    { name: 'Teams Board', url: 'tboard' },
    { name: 'Projects List', url: 'plist' },
    { name: 'Maintenance', url: 'maintenance' },
    { name: 'Testimonials', url: 'testimonials' },
    { name: 'FAQ', url: 'faq' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
