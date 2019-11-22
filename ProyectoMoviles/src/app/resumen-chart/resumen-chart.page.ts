import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';


@Component({
  selector: 'app-resumen-chart',
  templateUrl: './resumen-chart.page.html',
  styleUrls: ['./resumen-chart.page.scss'],
})
export class ResumenChartPage implements OnInit {

  public locations;
  public dogs;
  constructor(private geolocation: Geolocation) { }

  ngOnInit() {
    this.locations = [
      { Latitude: '10', Longitude: '10', img: '/assets/imgs/cacomixtle.jpeg' },
      { Latitude: '20', Longitude: '20', img: '/assets/imgs/tigre.jpeg' },
    ];
  }


  locate() {
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude

      let data: any = [];
      data = { Latitude: resp.coords.latitude, Longitude: resp.coords.longitude };
      this.locations.push(data);

    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

}
