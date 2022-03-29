import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { PlatilloDetailComponent } from './platillos/platillo-detail/platillo-detail.component';
import { PlatillosListComponent } from './platillos/platillos-list/platillos-list.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'platillos', component: PlatillosListComponent },
      { path: 'platillo/:id', component: PlatilloDetailComponent },
    ]

  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
