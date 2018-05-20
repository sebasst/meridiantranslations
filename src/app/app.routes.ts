/**
 * Created by sebas on 20/3/2018.
 */
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {ServicesComponent} from "./components/services/services.component";
import {ServicesdetailsComponent} from "./components/servicesdetails/servicesdetails.component";
import {InterpretationServicesComponent} from "./components/interpretation-services/interpretation-services.component";
import {OtherServicesComponent} from "./components/other-services/other-services.component";
import {LandPageComponent} from "./components/land-page/land-page.component";




const appRoutes: Routes = [
  {path: '', component: LandPageComponent},
  {path: 'services', component: ServicesdetailsComponent},
  {path: 'interpretation', component: InterpretationServicesComponent},
  {path: 'otherServices', component: OtherServicesComponent},
  {path: '**', pathMatch: 'full', redirectTo: ''}
]

export const app_routing = RouterModule.forRoot(appRoutes, {useHash: true})
