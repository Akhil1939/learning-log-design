import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { AppModule } from 'src/app/app.module';
import { SharedModule } from '../shared-module/shared-module.module';
import { AccountLayoutComponent } from './layouts/account-layout/account-layout.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AccountLayoutComponent,
    
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule
  ]
})
export class AccountModule {
  
    constructor() {
      console.log('AccountModule loaded.');
    }
 }
