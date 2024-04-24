import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path: '', component:Demo1Component},
    {path: 'demo1', component:Demo1Component},
    {path: 'demo2', component:Demo2Component},
    {path: 'login', component:LoginComponent},
    {path: 'registration', component:RegistrationComponent},
    //Unknow redirect
    {path: 'test', redirectTo:'demo1'},
    //Default error 404 routes - not found
    {path: '**', component:NotFoundComponent},
];
