import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginPage } from './auth/login/login.page';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPage },
  { path: 'cuenta', loadChildren: './cuenta/cuenta.module#CuentaPageModule' },
  { path: 'movimientos', loadChildren: './movimientos/movimientos.module#MovimientosPageModule' },
  { path: 'resumen', loadChildren: './resumen-chart/resumen-chart.module#ResumenChartPageModule' },
  { path: 'alumbrar', loadChildren: './alumbrar/alumbrar.module#AlumbrarPageModule' },




];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
