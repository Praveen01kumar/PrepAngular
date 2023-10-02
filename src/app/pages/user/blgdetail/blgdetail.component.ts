import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api-service';
import { HighlightService } from 'src/app/shared/services/prisma-service';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-blgdetail',
  templateUrl: './blgdetail.component.html',
  styleUrls: ['./blgdetail.component.scss'],
  providers: [HighlightService],
})
export class BlgdetailComponent implements OnInit {

  postDetail: any;
  private highlighted: boolean = false;
  // &lt;div&gt;hello&lt;/div&gt;
  htmlContent1: any = "<pre><code class=\"language-markup\">&lt;p i18n&gt;Hello, World!&lt;/p&gt;\n</code></pre>";
  htmlContent2: any = '<pre><code class=\"language-typescript\">function Product(name, price) {  // Product constructor    \n    this.name = name;\n    this.price = price;\n}\n\nvar product1 = new Product("Shoes", 49.99); // Product instance\nvar product2 = new Product("Phone", 599.99); // Another product\n\nfunction Person(firstName, lastName) { // Person constructor\n    this.firstName = firstName;\n    this.lastName = lastName;\n}\n\nvar person1 = new Person("John", "Doe"); // Person instance\nvar person2 = new Person("Alice", "Smith"); // Another person\n\nfunction Animal(type, legs) {       // Animal constructor\n    this.type = type;\n    this.legs = legs;\n}\n\nvar cat = new Animal("Cat", 4);      // Cat instance\nvar dog = new Animal("Dog", 4);      // Dog instance\n\nfunction Company(name, employees) {  // Company constructor\n    this.name = name;\n    this.employees = employees;\n}\n\nvar company1 = new Company("ABC Inc.", ["Alice", "Bob"]); // Company instance\nvar company2 = new Company("XYZ Corp.", ["Charlie", "David"]); // Another company\n</pre></code>';
  constructor(
    private highlightService: HighlightService,
    private apiService: ApiService,
    private route: ActivatedRoute,
    public sharedService: SharedService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.sharedService.postData$.subscribe((res: any) => {
      if (res !== null) {
        this.getDataArr(res);
      } else {
        this.apiService.getTopics().subscribe((res: any) => {
          this.getDataArr(res);
          this.sharedService.postData$.next(res);
        });
      }
    });
  }

  getDataArr(res: any) {
    const postId = this.route?.snapshot?.params['id']?.replace(/_/g, " ");
    const postCt = this.route?.snapshot?.params['category']?.replace(/_/g, " ");
    if (res) {
      const data = res?.topicsArr?.find((el: any) => el?.title === postCt);
      this.postDetail = data?.left.concat(data?.right)?.find((el: any) => el?.name === postId);
      // show detail view 
      if (this.postDetail) {
        const postContainer = document.getElementById('discription') as HTMLElement;
        const titleElement = document.createElement('h2');
        titleElement.textContent = this.postDetail?.name;
        const descriptionElement = document.createElement('div');
        descriptionElement.innerHTML = this.postDetail?.discription!==undefined?this.postDetail?.discription:'Comming Soon...';
        postContainer.appendChild(titleElement);
        postContainer.appendChild(descriptionElement);
      }
    }
  }


  ngAfterViewChecked() {
    this.highlightAll();
  }

  highlightAll() {
    if (!this.highlighted) {
      this.highlightService.highlightAll();
      this.highlighted = true;
    }
  }

}
