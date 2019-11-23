import { Component } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(private statusbar: StatusBar) {
    this.statusbar.backgroundColorByHexString("#00539C");
  }

  ngOnInit() {
  }


}