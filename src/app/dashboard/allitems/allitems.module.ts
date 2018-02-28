import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { AllItemsRoutingModule } from './allitems-routing.module';

import { AllItemsComponent } from './allitems.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AllItemComponent } from './item/allitem.component';

import { HttpModule } from '@angular/http';

@NgModule({
  imports: [ThemeModule, AllItemsRoutingModule,FormsModule,HttpModule],
  declarations: [AllItemsComponent,AllItemComponent],
  providers: []
})
export class AllItemsModule {}
