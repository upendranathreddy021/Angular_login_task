import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorCompComponent } from './error-comp/error-comp.component';

const appRoutes:Routes=[
  {path:'',component:HomeComponent},
  //{path:'',redirectTo:'Home',pathMatch:'full'},
  {path:"Home",component:HomeComponent},
  {path:"login",component:LoginComponent},

  {path:"aboutus",component:AboutusComponent},
  {path:'**',component:ErrorCompComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AboutusComponent,
    ErrorCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
