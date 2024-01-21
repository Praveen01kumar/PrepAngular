import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { ApiService } from 'src/app/shared/services/api-service';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.scss']
})
export class NewpostComponent implements OnInit {
  constructor(
    public apiService: ApiService,
    public sharedService: SharedService
  ) { }
  isLoading: boolean = false;
  catogaryCtr = new FormControl();
  catogaryList: any[] = [];
  selectedFile: any = null;
  mycontent: string | any;
  ckeConfig: any;
  blogTitle: string = '';
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  subscriptions: Subscription[] = [];
  ngOnInit(): void { this.callOnInit(); }

  onFileSelected(event: any) { this.selectedFile = event.target.files[0] ?? null; }

  callOnInit() {
    this.ckConfig();
    this.getCategory();
  }

  ckConfig() {
    this.mycontent = `<h3>My First Blog...</h3>`;
    this.ckeConfig = {
      extraPlugins:
        "easyimage,dialogui,dialog,a11yhelp,about,basicstyles,bidi,blockquote,clipboard," +
        "button,panelbutton,panel,floatpanel,colorbutton,colordialog,menu," +
        "contextmenu,dialogadvtab,div,elementspath,enterkey,entities,popup," +
        "filebrowser,find,fakeobjects,flash,floatingspace,listblock,richcombo," +
        "font,format,forms,horizontalrule,htmlwriter,iframe,image,indent," +
        "indentblock,indentlist,justify,link,list,liststyle,magicline," +
        "maximize,newpage,pagebreak,pastefromword,pastetext,preview,print," +
        "removeformat,resize,save,menubutton,scayt,selectall,showblocks," +
        "showborders,smiley,sourcearea,specialchar,stylescombo,tab,table," +
        "tabletools,templates,toolbar,undo,wsc,wysiwygarea"
    };
  }

  createPost() {
    const postData = new FormData;
    postData.append('title', this.blogTitle);
    postData.append('description', this.mycontent);
    postData.append('image', this.selectedFile);
    postData.append('category', JSON.stringify(this.catogaryCtr.value));
    this.isLoading = true;
    this.apiService.createNewPost(postData).pipe(takeUntil(this._unsubscribeAll), finalize(() => { this.isLoading = false; })).subscribe((val: any) => {
      if (val?.status) {
        this.sharedService.snake({ message: val?.message });
      }
    }, (error) => {
      this.isLoading = false;
      this.sharedService.snake({ message: error?.error?.message });
    });

  }

  getCategory() {
    this.apiService.getAllCategory().subscribe((cate: any) => {
      if (cate?.status) {
        this.catogaryList = cate?.category;
      }
    }, (error) => { });
  }


  ngOnDestroy(): void {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
    this.subscriptions.forEach(s => s.unsubscribe());
  }

}
