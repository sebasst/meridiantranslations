import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styles: [`
    select:invalid {
      color: gray;
    }
  `]
})
export class ContactusComponent implements OnInit {

  services = [
    'Traducción',
    'Interpretación',
    'Otros servicios'
  ];

  languages = [
    'Inglés',
    'Francés',
    'Español'
  ];


  constructor() {
  }

  ngOnInit() {
  }

}
