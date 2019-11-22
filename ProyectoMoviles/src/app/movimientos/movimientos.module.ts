import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MovimientosPage } from './movimientos.page';

const routes: Routes = [
  {
    path: '',
    component: MovimientosPage
  }
];

@NgModule({
  entryComponents: [
  ],

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
  ],
  declarations: [MovimientosPage]
})
export class MovimientosPageModule { }
