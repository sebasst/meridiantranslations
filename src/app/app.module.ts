import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServicesComponent } from './components/services/services.component';
import { HomeComponent } from './components/home/home.component';
import {app_routing} from './app.routes';
import { WINDOW_PROVIDERS} from './services/scrollWindow.service';
import { WhyUsComponent } from './components/why-us/why-us.component';
import { ClientTestimonialsComponent } from './components/client-testimonials/client-testimonials.component';
import {AlertModule, BsDropdownModule, CarouselModule} from 'ngx-bootstrap';
import { TesterComponent } from './components/tester/tester.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ProfileComponent } from './components/profile/profile.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ServicesComponent,
    HomeComponent,
    WhyUsComponent,
    ClientTestimonialsComponent,
    TesterComponent,
    ClientsComponent,
    ProfileComponent,
  ],
  imports: [
    BsDropdownModule.forRoot(),
    AlertModule.forRoot(),CarouselModule.forRoot(),
    BrowserModule,
    app_routing
  ],
  providers: [WINDOW_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
