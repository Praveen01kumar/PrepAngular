import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contactcard',
  templateUrl: './contactcard.component.html',
  styleUrls: ['./contactcard.component.scss']
})
export class ContactcardComponent implements OnInit {

  constructor() { }
  cardItem: any[] = [
    { value: "95", img: "assets/avatar/avatar1.jpg", name: "John Smith", social: [{ link: "facebook", icon: "bi bi-facebook" }, { link: "twitter", icon: "bi bi-twitter" }, { link: "instagram", icon: "bi bi-instagram" },], designation: "795 Folsom Ave, Suite 600 San Francisco, CADGE 94107" },
    { value: "55", img: "assets/avatar/avatar2.jpg", name: "Hossein Shams", social: [{ link: "facebook", icon: "bi bi-facebook" }, { link: "twitter", icon: "bi bi-twitter" }, { link: "instagram", icon: "bi bi-instagram" },], designation: "795 Folsom Ave, Suite 600 San Francisco, CADGE 94107" },
    { value: "65", img: "assets/avatar/avatar3.jpg", name: "Maryam Amiri", social: [{ link: "facebook", icon: "bi bi-facebook" }, { link: "twitter", icon: "bi bi-twitter" }, { link: "instagram", icon: "bi bi-instagram" },], designation: "795 Folsom Ave, Suite 600 San Francisco, CADGE 94107" },
    { value: "25", img: "assets/avatar/avatar4.jpg", name: "Tim Hank", social: [{ link: "facebook", icon: "bi bi-facebook" }, { link: "twitter", icon: "bi bi-twitter" }, { link: "instagram", icon: "bi bi-instagram" },], designation: "795 Folsom Ave, Suite 600 San Francisco, CADGE 94107" },
    { value: "15", img: "assets/avatar/avatar5.jpg", name: "John Smith", social: [{ link: "facebook", icon: "bi bi-facebook" }, { link: "twitter", icon: "bi bi-twitter" }, { link: "instagram", icon: "bi bi-instagram" },], designation: "795 Folsom Ave, Suite 600 San Francisco, CADGE 94107" },
    { value: "75", img: "assets/avatar/avatar1.jpg", name: "Frank Camly", social: [{ link: "facebook", icon: "bi bi-facebook" }, { link: "twitter", icon: "bi bi-twitter" }, { link: "instagram", icon: "bi bi-instagram" },], designation: "795 Folsom Ave, Suite 600 San Francisco, CADGE 94107" },
    { value: "85", img: "assets/avatar/avatar2.jpg", name: "Gary Camara", social: [{ link: "facebook", icon: "bi bi-facebook" }, { link: "twitter", icon: "bi bi-twitter" }, { link: "instagram", icon: "bi bi-instagram" },], designation: "795 Folsom Ave, Suite 600 San Francisco, CADGE 94107" },
    { value: "5", img: "assets/avatar/avatar3.jpg", name: "Tim Hank", social: [{ link: "facebook", icon: "bi bi-facebook" }, { link: "twitter", icon: "bi bi-twitter" }, { link: "instagram", icon: "bi bi-instagram" },], designation: "795 Folsom Ave, Suite 600 San Francisco, CADGE 94107" },
    { value: "45", img: "assets/avatar/avatar4.jpg", name: "Maryam Amiri", social: [{ link: "facebook", icon: "bi bi-facebook" }, { link: "twitter", icon: "bi bi-twitter" }, { link: "instagram", icon: "bi bi-instagram" },], designation: "795 Folsom Ave, Suite 600 San Francisco, CADGE 94107" },
  ]
  ngOnInit(): void {
  }

}
