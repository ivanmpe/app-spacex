import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-rockets',
  templateUrl: 'rockets.html',
})
export class RocketsPage {

  naves: any = []

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {

    this.http.get('https://api.spacexdata.com/v3/rockets').map(res => res.json()).subscribe(data => {
      this.naves = data; 
      console.log(data);
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RocketsPage');
  }

  

  description( text: any) {
    const alert = this.alertCtrl.create({
      title: 'Descrição',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }



}
