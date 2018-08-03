import {AfterViewInit, Component, HostListener, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';
import {WINDOW} from '../../services/scrollWindow.service';

import {GetStylesService} from '../../services/get-styles.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: ['.tester{position: initial;}']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  public isScrolled = false;
  route: string = null;

  constructor(@Inject(DOCUMENT) private document: Document,
              @Inject(WINDOW) private window: Window,
              private getStyleService: GetStylesService) {

    getStyleService.setScrolled(false);
  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {

  }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    let number: number;
    number = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    if (number > 100) {
      this.isScrolled = true;
    } else if (this.isScrolled && number < 10) {
      this.isScrolled = this.getStyleService.getScrolled();
    }
  }

}
