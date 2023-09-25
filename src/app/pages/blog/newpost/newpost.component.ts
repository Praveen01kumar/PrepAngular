import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-newpost',
  templateUrl: './newpost.component.html',
  styleUrls: ['./newpost.component.scss']
})
export class NewpostComponent implements OnInit {

  catogaryCtr = new FormControl('');
  catogaryList: any[] = [{ name: 'Web Design' }, { name: 'Photography' }, { name: 'Technology' }, { name: 'Lifestyle' }, { name: 'Sports' }];
  selectedFile: any = null;
  mycontent: string | any;
  ckeConfig: any;

  constructor() { }

  ngOnInit(): void { this.ckConfig(); }

  onFileSelected(event: any) { this.selectedFile = event.target.files[0] ?? null; }

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
  createPost(){
    const postData = this.mycontent;
    console.log(JSON.stringify(this.mycontent));
    
  }
}
