import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-resumen-chart',
  templateUrl: './resumen-chart.page.html',
  styleUrls: ['./resumen-chart.page.scss'],
})
export class ResumenChartPage implements OnInit {

  public locations;

  photos: any = [];

  constructor(private geolocation: Geolocation, public camera: Camera, public file: File) { }

  ngOnInit() {
    this.locations = [
      { Latitude: '10', Longitude: '10', img: '/assets/imgs/cacomixtle.jpeg' },
      { Latitude: '20', Longitude: '20', img: '/assets/imgs/tigre.jpeg' },
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



        this.photos.push(base64data)
      })
    })
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
