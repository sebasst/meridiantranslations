/**
 * Created by sebas on 20/3/2018.
 */
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {ServicesComponent} from "./components/services/services.component";




const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'services', component: ServicesComponent},
  {path: '**', pathMatch: 'full', redirectTo: ''}
]

export const app_routing = RouterModule.forRoot(appRoutes, {useHash: true})
