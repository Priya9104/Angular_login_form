import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ResetpasswordComponent } from './pages/resetpassword/resetpassword.component';

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'reset_password', component:ResetpasswordComponent},
  {path:'**', component:LoginComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 ServiceWorker