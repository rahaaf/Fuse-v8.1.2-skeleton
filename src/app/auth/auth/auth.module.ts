import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from '../login/login.module';
import { RegisterModule } from '../register/register.module';
import { ForgetpassModule } from '../forgetpass/forgetpass.module';


@NgModule({
  imports: [
    CommonModule,
    LoginModule,
    RegisterModule,
    ForgetpassModule,
  ]
})
export class AuthModule { }
