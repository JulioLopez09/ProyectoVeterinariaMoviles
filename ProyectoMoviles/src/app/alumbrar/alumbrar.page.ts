import { Component, OnInit } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight/ngx';

@Component({
  selector: 'app-alumbrar',
  templateUrl: './alumbrar.page.html',
  styleUrls: ['./alumbrar.page.scss'],
})
export class AlumbrarPage implements OnInit {

  constructor(private flashlight: Flashlight) { }

  ngOnInit() {
  }

  switchFlashlight(evento) {

    let power: boolean = evento.target.checked;


    if (power == true) {
      this.flashlight.switchOn();
      console.log('Prender');
    }
    else {
      this.flashlight.switchOff();
      console.log('Apagar');
    }
  }

}
