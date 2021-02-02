import { PhonelistComponent } from './phonelist/phonelist.component';
import { PhoneDetailsComponent } from './phone-details/phone-details.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: PhonelistComponent},
  {path: 'details/:id', component: PhoneDetailsComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
