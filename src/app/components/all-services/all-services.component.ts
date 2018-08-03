import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GetStylesService} from "../../services/get-styles.service";

@Component({
  selector: 'app-all-services',
  templateUrl: './all-services.component.html',
  styleUrls: ['./all-services.component.css']
})
export class AllServicesComponent implements OnInit, AfterViewInit {
  private fragment: string;

  constructor(private getStyleService: GetStylesService, private route: ActivatedRoute) {

    getStyleService.setScrolled(true);
  }

  ngOnInit() {
    this.route.fragment.subscribe(fragment => {
      this.fragment = fragment;
    });
  }

  ngAfterViewInit(): void {
    try {
      document.querySelector('#' + this.fragment).scrollIntoView();
      console.log('xxxxxxxxxxxxxxxxxxx');
      console.log(this.fragment)
    } catch (e) {
    }
  }
}
