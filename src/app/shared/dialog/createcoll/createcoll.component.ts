import { Component, ElementRef, HostListener, OnInit, ViewChild, Inject, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-createcoll',
  templateUrl: './createcoll.component.html',
  styleUrls: ['./createcoll.component.scss']
})
export class CreatecollComponent implements OnInit {
  wordCount: any;
  @ViewChild("text") text: ElementRef | any;
  words: any;

  subscription: Subscription | any;

  @HostListener("keydown.esc")
  public close(value: boolean) { this.mdDialogRef.close(value); }
  public onEsc() { this.close(false); }

  collectionForm: FormGroup | any;
  submitted = false;
  collArr: any[] = [];
  collId: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private mdDialogRef: MatDialogRef<CreatecollComponent>,
    private fb: FormBuilder,
    private sharedService: SharedService,
    private _snackBar: MatSnackBar,
  ) { }


  ngOnInit(): void {
    this.forminicialization();
    this.getDataValue();
    this.getcollectionArr();
    this.patchForm();

  }

  getDataValue() {
    this.subscription = this.sharedService?.cast_Coll_Id?.subscribe((data: any) => { this.collId = data });
  }

  getcollectionArr() {
    this.collArr = JSON.parse(localStorage.getItem("Collection") || '[]');
  }

  ngOnDestroy() { this.subscription.unsubscribe() }

  forminicialization() {
    this.collectionForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(this.minlen), Validators.maxLength(this.maxlen)]],
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(16)]],
      route: ['', [Validators.required]]
    })
  }

  patchForm() {
    if (this.collId.mode == 'edit') {
      this.collectionForm.patchValue({
        title: [this.collArr[this.collId.id].title],
        name: [this.collArr[this.collId.id].name],
        route: [this.collArr[this.collId.id].route]
      });
    }
  }

  get f() { return this.collectionForm.controls; }
  public cancel() { this.close(false); }

  onSubmit() {
    this.submitted = true;
    if (this.collectionForm.invalid) { return }
    if (this.collectionForm.valid) {
      if (this.collId.mode == 'create') {
        this.createNewCollaction();
        this._snackBar.open('Collection is Created!', 'Ok');
      }
      if (this.collId.mode == 'edit') {
        this.updateCollection();
        this._snackBar.open('Collection is Updated!', 'Ok');
      }
      this.collectionForm.reset();
      this.close(true);
    }
  }

  createNewCollaction() {
    this.collArr.push(this.collectionForm.value);
    localStorage.setItem("Collection", JSON.stringify(this.collArr));
  }

  updateCollection() {
    this.collArr[this.collId.id] = this.collectionForm.value;
    localStorage.setItem("Collection", JSON.stringify(this.collArr));
  }

  onReset() {
    this.submitted = false;
    this.collectionForm.reset();
    this.close(true);
  }

  wordCounter() {
    this.wordCount = this.text ? this.text.nativeElement.value.split(/\s+/) : 0;
    this.words = this.wordCount ? this.wordCount.length : 0;
  }

  get maxlen(): any { if (this.words >= 11) { return 0 } }
  get minlen(): any { if (this.words <= 5) { return 1000 } }

}
