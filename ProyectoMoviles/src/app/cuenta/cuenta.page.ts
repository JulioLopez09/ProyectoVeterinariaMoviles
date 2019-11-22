import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AgregarCuentaPage } from './agregar-cuenta/agregar-cuenta.page';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {

  public cuentas;
  constructor(public modalController: ModalController) { }

  ngOnInit() {
    this.cuentas = [
      { Nombre: 'Julio López', NumPerros: 1, Patio: 'Sí' },
      { Nombre: 'Andrés Alexis', NumPerros: 5, Patio: 'No' },
      { Nombre: 'Jesús Uresti', NumPerros: 2, Patio: 'Sí' },
      { Nombre: 'Marco Hernández', NumPerros: 1, Patio: 'No' },
      { Nombre: 'José Santiago', NumPerros: 0, Patio: 'Sí' },
    ];
  }

  async onAgregarCuenta() {
    const modal = await this.modalController.create({
      component: AgregarCuentaPage,
      componentProps: {
        titulo: 'Agregar Cuenta'
      }
    });
    modal.onDidDismiss().then((data) => {
      if (data['data'] != null) {
        this.cuentas.push(data['data']);
      }

    });
    return await modal.present();
  }

}