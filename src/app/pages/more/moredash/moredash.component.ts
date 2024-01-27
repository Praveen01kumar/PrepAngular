import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-moredash',
  templateUrl: './moredash.component.html',
  styleUrls: ['./moredash.component.scss']
})
export class MoredashComponent implements OnInit {

  catagArr: any[] = [
    { name: 'About us', url: 'about' },
    { name: 'AIS Tools', url: 'ais' },
    { name: 'Password Generator', url: 'pass' },
    { name: 'Stop Watch', url: 'stopwatch' },
    { name: 'Quiz', url: 'quiz' },
    { name: 'To Do', url: 'todo' },
    { name: 'Collections', url: 'collections' },
    { name: 'Tic Tac Toy', url: 'tictactoy' },
    { name: 'Books', url: 'pdfbooks' }
  ];

  constructor() { }
  ngOnInit(): void { }

}
