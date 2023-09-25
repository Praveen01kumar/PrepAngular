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
  htmlContent2: any = "<pre><code class=\"language-typescript\">// Using decorators \n@Component({ \n   selector: 'app-example',\n   templateUrl: './example.component.html',\n   styleUrls: ['./example.component.css'] \n  }) \nexport class ExampleComponent { }\n</code></pre>";
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
        descriptionElement.innerHTML = this.postDetail?.discription;
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
