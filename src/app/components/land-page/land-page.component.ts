import { Component, OnInit } from '@angular/core';
import {GetStylesService} from "../../services/get-styles.service";

@Component({
  selector: 'app-land-page',
  templateUrl: './land-page.component.html',
  styles: []
})
export class LandPageComponent implements OnInit {

  constructor(private getStyleService: GetStylesService) {
    getStyleService.setScrolled(false);
  }

  ngOnInit() {

  }

}
