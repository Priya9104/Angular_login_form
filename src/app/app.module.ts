import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HeaderComponent } from './include/header/header.component';
import { FooterComponent } from './include/footer/footer.component';
import { ResetpasswordComponent } from './pages/resetpassword/resetpassword.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    ResetpasswordComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
