import { Routes } from '@angular/router';
import { ChisiamoComponent } from './componenti/chisiamo/chisiamo.component';
import { PaginaPrincipaleComponent } from './componenti/pagina-principale/pagina-principale.component';

export const routes: Routes = [
    { path: '', component: PaginaPrincipaleComponent, title: 'Home' },
    { path: 'chi-siamo', component: ChisiamoComponent, title: 'Chi Siamo' },
];
