import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { ApiService } from '../../services/api-service';

@Component({
  selector: 'drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss']
})
export class DragDropComponent implements OnInit {

  constructor(public dataService: SharedService,public apiService:ApiService) { }
  outerArr: any[] = [];
  btmdrArr: any[] = ['Lost', 'Abendent', 'Won'];

  ngOnInit(): void { this.getYourData() }

  arrDrop(event: CdkDragDrop<string[]>) {
    let isMovingInsideTheSameList = event?.previousContainer === event?.container;
    if (isMovingInsideTheSameList) {
      moveItemInArray(
        event?.container?.data,
        event?.previousIndex,
        event?.currentIndex
      );
    } else {
      transferArrayItem(
        event?.previousContainer?.data,
        event?.container?.data,
        event?.previousIndex,
        event?.currentIndex
      );
    }
  }

  listDrop(event: CdkDragDrop<string[]>) {
    let isMovingInsideTheSameList = event?.previousContainer === event?.container;
    if (!isMovingInsideTheSameList) {
      if (event?.container?.id === this.btmdrArr?.filter(id => id == event?.container?.id)[0]) {
        console.log(event?.container?.id + '=>', event?.item?.data);
        // your code will goes here
      }
    } else {
      console.log('somthing Went Rong');
    }
  }
   getYourData() {
    this.apiService.getTodos().subscribe((res: any) => {
      this.outerArr = res?.dataArr;
    }, (error) => { });
  }



}
