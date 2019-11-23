import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-resumen-chart',
  templateUrl: './resumen-chart.page.html',
  styleUrls: ['./resumen-chart.page.scss'],
})
export class ResumenChartPage implements OnInit {

  public locations;


  constructor(private geolocation: Geolocation, public camera: Camera, public file: File, private statusbar: StatusBar) {
    this.statusbar.backgroundColorByHexString("#00539C");

  }

  ngOnInit() {
    this.locations = [
      { Latitude: '20.5467', Longitude: '-105.5319', img: '/assets/imgs/perro1.jpg' },
      { Latitude: '22.5116', Longitude: '-97.0635', img: '/assets/imgs/perro2.jpg' },
    ];
  }

  TakePhotos() {
    var options: CameraOptions = {
      quality: 100,
      mediaType: this.camera.MediaType.PICTURE,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG
    }
    this.camera.getPicture().then((imagedata) => {
      let filename = imagedata.substring(imagedata.lastIndexOf('/') + 1);
      let path = imagedata.substring(0, imagedata.lastIndexOf('/') + 1);
      this.file.readAsDataURL(path, filename).then((base64data) => {

        this.geolocation.getCurrentPosition().then((resp) => {
          // resp.coords.latitude
          // resp.coords.longitude

          let data: any = [];
          data = { Latitude: resp.coords.latitude, Longitude: resp.coords.longitude, img: base64data };
          this.locations.push(data);

        }).catch((error) => {
          console.log('Error getting location', error);
        });


      })
    })
  }

}
