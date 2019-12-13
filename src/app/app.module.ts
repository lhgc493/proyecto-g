import { BrowserModule,  } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// rutas

import { APP_ROUTES } from './app.routes';

// modulos

import { PagesModule } from './pages/pages.module';



// temporal

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// servicios
import { ServiceModule } from './services/service.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    FormsModule,
    ReactiveFormsModule, // para trabajar en registro de usuarios
    ServiceModule, // para trabajar con los servicos centralizados
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
