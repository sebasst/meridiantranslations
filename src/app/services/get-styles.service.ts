import {Injectable} from '@angular/core';

@Injectable()
export class GetStylesService {

  isScrolled = false;

  constructor() {
  }

  setScrolled(scrolled: boolean) {
    this.isScrolled = scrolled;
  }


  getScrolled(): boolean {
    return this.isScrolled;
  }

}
