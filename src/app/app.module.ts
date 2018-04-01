import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServicesComponent } from './components/services/services.component';
import { HomeComponent } from './components/home/home.component';
import {app_routing} from './app.routes';
import { WINDOW_PROVIDERS} from './services/scrollWindow.service';
import { WhyUsComponent } from './why-us/why-us.component';
import { ClientTestimonialsComponent } from './client-testimonials/client-testimonials.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ServicesComponent,
    HomeComponent,
    WhyUsComponent,
    ClientTestimonialsComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [WINDOW_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
