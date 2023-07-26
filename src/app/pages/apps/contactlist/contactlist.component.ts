import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.scss']
})
export class ContactlistComponent implements OnInit {

  constructor() { }
  allSelected: boolean = false;
  someSelected(): boolean {
    if (this.contactList == null) { return false };
    return this.contactList.filter((t: any) => t.selected).length > 0 && !this.allSelected;
  };
  setAll(selected: boolean) {this.allSelected = selected;
    if (this.contactList == null) { return }
    this.contactList.forEach((t: any) => (t.selected = selected));
  };
  updateAllSelected() { this.allSelected = this.contactList != null && this.contactList?.every((t: any) => t?.selected) };

  contactList: any[] = [
    { selected: false, img: "assets/avatar/avatar1.jpg", name: "John Smith", badge: { name: "FAMILY", type: "default" }, phone: "4546434323", address: "123 6th St. Melbourne, FL 32904" },
    { selected: false, img: "assets/avatar/avatar2.jpg", name: "Hossein Shams", badge: { name: "GOOGLE", type: "success" }, phone: "2646255689", address: "44 Shirley Ave. West Chicago, IL 60185" },
    { selected: false, img: "assets/avatar/avatar3.jpg", name: "Maryam Amiri", phone: "2646259513", address: "123 6th St. Melbourne, FL 44556" },
    { selected: false, img: "assets/avatar/avatar4.jpg", name: "Tim Hank", badge: { name: "FAMILY", type: "default" }, phone: "3453453454", address: "70 Bowman St. South Windsor, CT 06074" },
    { selected: false, img: "assets/avatar/avatar5.jpg", name: "Fidel Tonn", badge: { name: "FAMILY", type: "default" }, phone: "8978655676", address: "514 S. Magnolia St. Orlando, FL 32806" },
    { selected: false, img: "assets/avatar/avatar1.jpg", name: "Gary Camara", badge: { name: "FAMILY", type: "success" }, phone: "8978645455", address: "44 Shirley Ave. West Chicago, IL 60185" },
    { selected: false, img: "assets/avatar/avatar2.jpg", name: "Frank Camly", phone: "8978645645", address: "123 6th St. Melbourne, FL 32904" },
    { selected: false, img: "assets/avatar/avatar3.jpg", name: "Tim Hank", badge: { name: "FAMILY", type: "default" }, phone: "9786745565", address: "70 Bowman St. South Windsor, CT 06074" }
  ]
  ngOnInit(): void {
  }

}
