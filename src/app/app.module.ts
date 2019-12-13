<<<<<<< HEAD
import { BrowserModule,  } from '@angular/platform-browser';
=======
import { BrowserModule } from '@angular/platform-browser';
>>>>>>> f54b1b87e7c1cde66ea5a4bf4ebd847c07605840
import { NgModule } from '@angular/core';

// rutas

import { APP_ROUTES } from './app.routes';

// modulos

import { PagesModule } from './pages/pages.module';

<<<<<<< HEAD


=======
>>>>>>> f54b1b87e7c1cde66ea5a4bf4ebd847c07605840
// temporal

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// servicios
import { ServiceModule } from './services/service.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
=======
>>>>>>> f54b1b87e7c1cde66ea5a4bf4ebd847c07605840





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
<<<<<<< HEAD
    ServiceModule, // para trabajar con los servicos centralizados
    HttpClientModule,
    
=======
    ServiceModule
>>>>>>> f54b1b87e7c1cde66ea5a4bf4ebd847c07605840
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
