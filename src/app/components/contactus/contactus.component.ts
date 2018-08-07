import {Component, OnInit} from '@angular/core';
import {ConstacModel} from '../../models/constac-model';
import {ContactEmailService} from '../../services/contact-email.service';
import {NgForm} from "@angular/forms";
import {AlertComponent} from "ngx-bootstrap";

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
  alerts: any[] = [{
    type: 'success',
    msg: `Well done! You successfully read this important alert message. (added: ${new Date().toLocaleTimeString()})`,
    timeout: 5000
  }];

  add(): void {
    this.alerts.push({
      type: 'success',
      msg: 'Gracias por su interés, pronto nos contactaremos!!',
      timeout: 5000
    });
  }

  onClosed(dismissedAlert: AlertComponent): void {
    this.alerts = this.alerts.filter(alert => alert !== dismissedAlert);
  }

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


  constructor(public contactEmailService: ContactEmailService) {
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this
      .submitted = true;
    console
      .log(
        'submitedxxxxx'
      );
    /*
    console
      .log(this

        .diagnostic()
      );
*/
    try {
      this.contactEmailService.sendContactForm(this.model).subscribe(resp => {
          console.log(resp, 'res');
          form.reset();
          this.add();
        },
        error => {
          console.log(error, 'error');
        });
    } catch (e) {
      console.log(e);

    }

  }


// TODO: Remove this when we're done
  diagnostic() {
    return JSON.stringify(this.model);
  }

}
