import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';
import { IncrementadorComponent } from '../reutilizables/incrementador/incrementador.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
<<<<<<< HEAD


// modulos

import { RxjsComponent } from './rxjs/rxjs.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RolesComponent } from './roles/roles.component';
import { CommonModule } from '@angular/common';
import { RolesformComponent } from './roles/rolesform.component';
import {NgxPaginationModule} from 'ngx-pagination'; // paginacion
=======
import { MantenimientosComponent } from './mantenimientos/mantenimientos.component';

// modulos
import { MantenimientoModule } from './mantenimientos/mantenimientos.module';
import { RxjsComponent } from './rxjs/rxjs.component';
>>>>>>> f54b1b87e7c1cde66ea5a4bf4ebd847c07605840




@NgModule ({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Grafica1Component,
        IncrementadorComponent,
        AccountSettingsComponent,
<<<<<<< HEAD
        RxjsComponent, UsuariosComponent,
        RolesComponent,
        RolesformComponent,
        
=======
        MantenimientosComponent,
        RxjsComponent,
>>>>>>> f54b1b87e7c1cde66ea5a4bf4ebd847c07605840

    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Grafica1Component,
<<<<<<< HEAD

=======
        MantenimientosComponent
>>>>>>> f54b1b87e7c1cde66ea5a4bf4ebd847c07605840
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
<<<<<<< HEAD
        CommonModule,
        NgxPaginationModule // paginacion

=======
        MantenimientoModule
>>>>>>> f54b1b87e7c1cde66ea5a4bf4ebd847c07605840
    ]
})

export class PagesModule { }
