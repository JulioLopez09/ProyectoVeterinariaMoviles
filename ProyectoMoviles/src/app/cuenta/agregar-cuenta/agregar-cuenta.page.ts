import { Component, OnInit, Inject } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
    selector: 'app-agregar-cuenta',
    templateUrl: './agregar-cuenta.page.html',
    styleUrls: ['./agregar-cuenta.page.scss'],
})
export class AgregarCuentaPage implements OnInit {

    registrarForm: FormGroup;


    constructor(
        private modalController: ModalController,
        private formBuilder: FormBuilder,
    ) {
        this.registrarForm = this.formBuilder.group({
            nombre: ['', Validators.required],
            numPerros: ['', [Validators.required]],
            patio: ['', [Validators.required]]
        });
    }

    Nombre: string;
    NumPerros: number;
    Patio: string;

    ngOnInit() {
    }

    get f() { return this.registrarForm.controls; }

    async subirCuenta() {
        let data: any = [];
        data = { Nombre: this.Nombre, NumPerros: this.NumPerros, Patio: this.Patio };
        this.modalController.dismiss(data);
    }

    async salirModal() {
        this.modalController.dismiss();
    }


}