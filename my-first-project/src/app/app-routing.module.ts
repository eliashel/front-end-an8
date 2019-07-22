import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { ProductAddComponent } from './components/products/product-add/product-add.component';
//import { ProductEditComponent } from './components/products/product-edit/product-edit.component';
//import { ProductGetComponent } from './components/products/product-get/product-get.component';
import { EnvironmentCreateComponent } from './modules/admin/env-manage/environments/components/environment-create/environment-create.component';
import { EnvironmentGetComponent } from './modules/admin/env-manage/environments/components/environment-get/environment-get.component';
import { EnvironmentEditComponent } from './modules/admin/env-manage/environments/components/environment-edit/environment-edit.component';


const routes: Routes = [
  // PRODUCTS
  /*
  {
    path: 'product/create',
    component: ProductAddComponent
  },
  {
    path: 'edit/:id',
    component: ProductEditComponent
  },
  {
    path: 'products',
    component: ProductGetComponent
  },
  */
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
