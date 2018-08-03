import {Component, OnInit} from '@angular/core';
import {ConstacModel} from '../../models/constac-model';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styles: [`
    .ng-valid[required], .ng-valid.required {
      border-left: 5px solid #42A948; /* green */
    }

    .ng-invalid:not(form) {
      border-left: 5px solid #a94442; /* red */
    }

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

  submitted = false;

  model = new ConstacModel();


  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    this
      .submitted = true;
    console
      .log(
        'submitedxxxxx'
      );
    console
      .log(this

        .diagnostic()
      );

  }



// TODO: Remove this when we're done
  diagnostic() {
    return JSON.stringify(this.model);
  }

}
