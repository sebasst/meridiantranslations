import {Component, OnInit, ViewChild} from '@angular/core';
import {CarouselComponent} from 'ngx-bootstrap';

@Component({
  selector: 'app-client-testimonials',
  templateUrl: './client-testimonials.component.html',
  styles: [
    ` :host >>>.carousel-control span {
      display: none;
    }`]
})
export class ClientTestimonialsComponent implements OnInit {

  @ViewChild('carusel') carousel: CarouselComponent;

  constructor() {
  }

  ngOnInit() {
  }

  nextSlide() {
    this.carousel.nextSlide();
  }

  previousSlide() {
    this.carousel.previousSlide();
  }

}
