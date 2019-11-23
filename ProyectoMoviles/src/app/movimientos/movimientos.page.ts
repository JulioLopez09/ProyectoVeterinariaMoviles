import { Component, OnInit } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.page.html',
  styleUrls: ['./movimientos.page.scss'],
})
export class MovimientosPage implements OnInit {

  constructor(private statusbar: StatusBar) {
    this.statusbar.backgroundColorByHexString("#00539C");

  }

  ngOnInit() {

  }

  reproducirChachalaca() {
    let sonido = new Audio();

    sonido.src = '/assets/sounds/chachalaca.mp3';
    sonido.load();
    sonido.play();
  }

  reproducirTigre() {
    let sonido = new Audio();

    sonido.src = '/assets/sounds/tigre.mp3';
    sonido.load();
    sonido.play();
  }

  reproducirMono() {
    let sonido = new Audio();

    sonido.src = '/assets/sounds/monoArdilla.mp3';
    sonido.load();
    sonido.play();
  }

  reproducirBoa() {
    let sonido = new Audio();

    sonido.src = '/assets/sounds/boaConstrictor.mp3';
    sonido.load();
    sonido.play();
  }

  reproducirCacomixtle() {
    let sonido = new Audio();

    sonido.src = '/assets/sounds/cacomixtle.mp3';
    sonido.load();
    sonido.play();
  }


}
