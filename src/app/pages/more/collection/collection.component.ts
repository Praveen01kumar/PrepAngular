import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  searchText: string | undefined;
  collectionsArr: any[] = [];
  disabeleDelete: boolean = true;

  constructor(
    private dialog: SharedService,
    private sharedService: SharedService,
    private _snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.getCollArr();
  }

  getCollArr() {
    const collArray = JSON.parse(localStorage.getItem("Collection") || '[]');
    if (collArray.length > 0) {
      this.collectionsArr = collArray;
    }
    if (collArray.length == 0) {
      this.collectionsArr = [
        {
            "title": "This is Search Engine Prowided By Google",
            "route": "google.com",
            "name": "Google"
        }
    ];
      this.disabeleDelete = false;
    }
  }

  openDialog(event: any) {
    const data = { id: event, mode: 'create' }
    this.dialog.open(true);
    this.sharedService.editCollection(data);

  }

  delete(id: number) {
    if (this.disabeleDelete) {
      this.collectionsArr.splice(id, 1)
      localStorage.setItem("Collection", JSON.stringify(this.collectionsArr));
      this._snackBar.open('Collection is Deleted!', 'Ok');
    } else {
      this._snackBar.open('This is not Deletable!', 'Ok');
    }
  }

  edit(id: number) {
    if (this.disabeleDelete) {
      const data = { id: id, mode: 'edit' }
      this.dialog.open(true)
      this.sharedService.editCollection(data);
    } else {
      this._snackBar.open('This is not Editable!', 'Ok');
    }
  }
}
