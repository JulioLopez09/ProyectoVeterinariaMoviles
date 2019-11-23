import { Component, OnInit } from '@angular/core';
import { Flashlight } from '@ionic-native/flashlight/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-alumbrar',
  templateUrl: './alumbrar.page.html',
  styleUrls: ['./alumbrar.page.scss'],
})
export class AlumbrarPage implements OnInit {

  constructor(private flashlight: Flashlight, private statusbar: StatusBar) {
    this.statusbar.backgroundColorByHexString("#00539C");
  }

  ngOnInit() {
  }

  switchFlashlight(evento) {

    let power: boolean = evento.target.checked;


    if (power == true) {
      this.flashlight.switchOn();
    }
    else {
      this.flashlight.switchOff();
    }
  }

}
