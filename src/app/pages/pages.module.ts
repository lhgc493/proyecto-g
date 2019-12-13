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


// modulos

import { RxjsComponent } from './rxjs/rxjs.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RolesComponent } from './roles/roles.component';
import { CommonModule } from '@angular/common';
import { RolesformComponent } from './roles/rolesform.component';
import {NgxPaginationModule} from 'ngx-pagination'; // paginacion




@NgModule ({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Grafica1Component,
        IncrementadorComponent,
        AccountSettingsComponent,
        RxjsComponent, UsuariosComponent,
        RolesComponent,
        RolesformComponent,
        

    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Grafica1Component,

    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule,
        CommonModule,
        NgxPaginationModule // paginacion

    ]
})

export class PagesModule { }
