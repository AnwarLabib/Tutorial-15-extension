import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';

import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';


@NgModule({
  imports: [ThemeModule,RegisterRoutingModule],
  declarations: [RegisterComponent],
  providers: []
})
export class RegisterModule {}
