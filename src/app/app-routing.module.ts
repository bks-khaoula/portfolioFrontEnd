import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { AjouterComponent } from './ajouter/ajouter.component';


const routes: Routes = [
{
  path:"about",component:AboutComponent
},
{
  path:"contact",component:ContactComponent
},
{
  path:"home",component:HomeComponent
},
{
  path:"ajouter",component:AjouterComponent
},
{
  path:"",redirectTo:"home",pathMatch:"full"
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
