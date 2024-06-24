import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CreateCitationComponent } from './components/create-citation/create-citation.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create', component: CreateCitationComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];
