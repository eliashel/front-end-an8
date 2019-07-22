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
import { EnvironmentCreateComponent } from './modules/admin/env-manage/environments/components/environment-create/environment-create.component';
import { EnvironmentGetComponent } from './modules/admin/env-manage/environments/components/environment-get/environment-get.component';
import { EnvironmentEditComponent } from './modules/admin/env-manage/environments/components/environment-edit/environment-edit.component';


/**********************/
/*     Servicios      */
/**********************/
import { EnvironmentsService } from './modules/admin/env-manage/environments/services/environments.service';

@NgModule({
  declarations: [
    AppComponent,
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
    EnvironmentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
