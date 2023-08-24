import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api-service';
import { HighlightService } from 'src/app/shared/services/prisma-service';

@Component({
  selector: 'app-blgdetail',
  templateUrl: './blgdetail.component.html',
  styleUrls: ['./blgdetail.component.scss'],
  providers: [ HighlightService ],
})
export class BlgdetailComponent implements OnInit {

  postDetail: any;
  private highlighted: boolean = false
  htmlContent: string = `
 <pre><code class=\"language-typescript\">import { Injectable, Inject } from '@angular/core';\n\nimport { PLATFORM_ID } from '@angular/core';\nimport { isPlatformBrowser } from '@angular/common';\n\nimport 'clipboard';\n\nimport 'prismjs';\nimport 'prismjs/plugins/toolbar/prism-toolbar';\nimport 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';\nimport 'prismjs/components/prism-css';\nimport 'prismjs/components/prism-javascript';\nimport 'prismjs/components/prism-java';\nimport 'prismjs/components/prism-markup';\nimport 'prismjs/components/prism-typescript';\nimport 'prismjs/components/prism-sass';\nimport 'prismjs/components/prism-scss';\n\ndeclare var Prism: any;\n\n@Injectable()\nexport class HighlightService {\n\n  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }\n\n  highlightAll() {\n    if (isPlatformBrowser(this.platformId)) {\n      Prism.highlightAll();\n    }\n  }\n}\n</code></pre>
  `
  constructor(
    private apiService: ApiService, 
    private route: ActivatedRoute,
    private highlightService: HighlightService
    ) { }
  ngOnInit(): void { this.getData(); }

  getData() {
    this.apiService.getTopics().subscribe((res: any) => {
      const postId = this.route?.snapshot?.params['id']?.replace(/_/g, " ");
      const postCt = this.route?.snapshot?.params['category']?.replace(/_/g, " ");
      const data = res?.topicsArr?.find((el: any) => el?.title === postCt);
      this.postDetail = data?.left.concat(data?.right)?.find((el: any) => el?.name === postId);
      // show detail view 
      const postContainer = document.getElementById('discription') as HTMLElement;
      const titleElement = document.createElement('h2');
      titleElement.textContent = this.postDetail?.name;
      const descriptionElement = document.createElement('div');
      descriptionElement.innerHTML = this.postDetail?.discription;
      postContainer.appendChild(titleElement);
      postContainer.appendChild(descriptionElement);

    });
  }

  ngAfterViewChecked() {
    if (!this.highlighted) {
      this.highlightService.highlightAll()
      this.highlighted = true
    }
  }
  

}
