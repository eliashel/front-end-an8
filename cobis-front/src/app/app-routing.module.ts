import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnvironmentCreateComponent } from './modules/admin/env-manage/environments/components/environment-create/environment-create.component';
import { EnvironmentGetComponent } from './modules/admin/env-manage/environments/components/environment-get/environment-get.component';
import { EnvironmentEditComponent } from './modules/admin/env-manage/environments/components/environment-edit/environment-edit.component';


const routes: Routes = [
  // ENVIRONMENTS
  {
    path: 'environment/create',
    component: EnvironmentCreateComponent
  },
  {
    path: 'enviornment/edit/:id',
    component: EnvironmentEditComponent
  },
  {
    path: 'environments',
    component: EnvironmentGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
