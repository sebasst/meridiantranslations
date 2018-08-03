import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {FooterComponent} from './components/footer/footer.component';
import {ServicesComponent} from './components/services/services.component';
import {HomeComponent} from './components/home/home.component';
import {app_routing} from './app.routes';
import {WINDOW_PROVIDERS} from './services/scrollWindow.service';
import {WhyUsComponent} from './components/why-us/why-us.component';
import {ClientTestimonialsComponent} from './components/client-testimonials/client-testimonials.component';
import {AlertModule, BsDropdownModule, CarouselModule} from 'ngx-bootstrap';
import {TesterComponent} from './components/tester/tester.component';
import {ClientsComponent} from './components/clients/clients.component';
import {ProfileComponent} from './components/profile/profile.component';
import {ContactusComponent} from './components/contactus/contactus.component';
import {FormsModule} from "@angular/forms";
import { ServicesdetailsComponent } from './components/servicesdetails/servicesdetails.component';
import { InterpretationServicesComponent } from './components/interpretation-services/interpretation-services.component';
import { OtherServicesComponent } from './components/other-services/other-services.component';
import { LandPageComponent } from './components/land-page/land-page.component';
import { AllServicesComponent } from './components/all-services/all-services.component';
import {GetStylesService} from "./services/get-styles.service";


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
    ContactusComponent,
    ServicesdetailsComponent,
    InterpretationServicesComponent,
    OtherServicesComponent,
    LandPageComponent,
    AllServicesComponent
  ],
  imports: [
    BsDropdownModule.forRoot(),
    AlertModule.forRoot(), CarouselModule.forRoot(),
    BrowserModule,
    app_routing,
    FormsModule
  ],
  providers: [WINDOW_PROVIDERS, GetStylesService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
