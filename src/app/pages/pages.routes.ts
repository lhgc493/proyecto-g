import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
<<<<<<< HEAD


// import { RolComponent } from './mantenimientos/rol/rol.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RolesComponent } from './roles/roles.component';
import { RolesformComponent } from './roles/rolesform.component';
import { LoginGuardGuard } from '../services/index.service';
=======
import { MantenimientosComponent } from './mantenimientos/mantenimientos.component';

// import { RolComponent } from './mantenimientos/rol/rol.component';
import { RxjsComponent } from './rxjs/rxjs.component';
>>>>>>> f54b1b87e7c1cde66ea5a4bf4ebd847c07605840




const pagesRoutes: Routes = [

    { path: '',
    component: PagesComponent,
<<<<<<< HEAD
    canActivate: [LoginGuardGuard], // para proteger rutas de navegacion
=======
>>>>>>> f54b1b87e7c1cde66ea5a4bf4ebd847c07605840
    children: [
       { path: 'dashboard', component: DashboardComponent },
       { path: 'grafica1', component: Grafica1Component },
       { path: 'progress', component: ProgressComponent },
       { path: 'account-setting', component: AccountSettingsComponent },
<<<<<<< HEAD
       { path: 'rxjs', component: RxjsComponent },
      // mantenimientos
       { path: 'usuario', component: UsuariosComponent, data: {titulo: 'mantenimientos'} },
       { path: 'rol', component: RolesComponent},
       { path: 'rolform', component: RolesformComponent},
       { path: 'rolform/:id', component: RolesformComponent},
=======
       { path: 'mantenimientos', component: MantenimientosComponent },
       { path: 'rxjs', component: RxjsComponent },
      // { path: 'mantenimientos/rol', component: RolComponent },
>>>>>>> f54b1b87e7c1cde66ea5a4bf4ebd847c07605840
       { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
      ]
    },

];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
