import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { NgxSpinnerModule } from "ngx-spinner";
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


/************************/
/*     Componentes      */
/************************/
import { AppComponent } from './app.component';
//import { ProductAddComponent } from './components/products/product-add/product-add.component';
//import { ProductGetComponent } from './components/products/product-get/product-get.component';
//import { ProductEditComponent } from './components/products/product-edit/product-edit.component';
import { EnvironmentCreateComponent } from './modules/admin/env-manage/environments/components/environment-create/environment-create.component';
import { EnvironmentGetComponent } from './modules/admin/env-manage/environments/components/environment-get/environment-get.component';
import { EnvironmentEditComponent } from './modules/admin/env-manage/environments/components/environment-edit/environment-edit.component';


/**********************/
/*     Servicios      */
/**********************/
//import { ProductsService } from './services/products/products.service';
import { EnvironmentsService } from './modules/admin/env-manage/environments/services/environments.service';

@NgModule({
  declarations: [
    AppComponent,
    //ProductAddComponent,
    //ProductGetComponent,
    //ProductEditComponent,
    EnvironmentCreateComponent,
    EnvironmentEditComponent,
    EnvironmentGetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlimLoadingBarModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    //ProductsService,
    EnvironmentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
