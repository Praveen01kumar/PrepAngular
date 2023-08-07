import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-sotial-link',
  templateUrl: './sotial-link.component.html',
  styleUrls: ['./sotial-link.component.scss']
})
export class SotialLinkComponent implements OnInit {

  constructor(public dialogref: MatDialogRef<SotialLinkComponent>) { }

  ngOnInit(): void {
    
  }

  closemodel() {
    this.dialogref.close();
  }

}

export class SotialLinkComponen1t extends SotialLinkComponent {

  

}