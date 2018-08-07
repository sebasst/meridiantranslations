import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ConstacModel} from "../models/constac-model";
import { Observable } from 'rxjs/Observable';

//let headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });
const httpOptions = { headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })};
const firebaseUrl: string = 'https://us-central1-contactform-dd890.cloudfunctions.net/sendContactForm';

@Injectable()
export class ContactEmailService {


  constructor(private http: HttpClient) { }

  sendContactForm(contactForm:ConstacModel):Observable<String>{

    var qsera= this.http.post<String>(firebaseUrl, contactForm, httpOptions);
    console.log(qsera);
    return qsera;
  }

}
