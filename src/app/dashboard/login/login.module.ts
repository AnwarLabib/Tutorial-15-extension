import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';


@NgModule({
  imports: [ThemeModule,LoginRoutingModule],
  declarations: [LoginComponent],
  providers: []
})
export class LoginModule {}
