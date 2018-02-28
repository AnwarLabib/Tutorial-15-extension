import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllItemsComponent } from './allitems.component';

const routes: Routes = [
  { path: '', component: AllItemsComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllItemsRoutingModule {}
