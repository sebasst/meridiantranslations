import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styles: []
})
export class ClientsComponent implements OnInit {

  basePath = 'assets/images/clients/';
  images: string[] = [
    '250px-Emblem_of_the_Union_of_South_American_Nations.svg.png',
    '607px-Medecins_du_monde.svg.png', 'ADC-HAS-Airports-Worldwide-Logo1.png',
    'arton3886.png', 'Cover-1stAveMachine_0.png', 'wwf.png',
    'iBillionaire-730x280.png', 'irmo.png',
    'emmaus.png', 'uiuztbrqbtqnbthj.jpg',
    'ONU-logo.png', 'World vision.png'
  ];
  srcs: string[] = [];

  constructor() {


  }

  ngOnInit() {
    for (const image of this.images) {
      this.srcs.push(this.basePath + image);
    }

  }

}
