import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the CapsulesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-capsules',
  templateUrl: 'capsules.html',
})
export class CapsulesPage {

  capsulas: any = [];
  teste: any;
  json;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public alertCtrl: AlertController) {
    this.http.get('https://api.spacexdata.com/v3/' + 'capsules').map(res => res.json()).subscribe(data => {
      this.capsulas = data; 
      console.log(data);
    });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CapsulesPage');
  }


  listCapsules() {


    
  }


/*  details( text: any) {
    const alert = this.alertCtrl.create({
      title: 'Detalhes',
      subTitle: text ,
      buttons: ['OK']
    });
    alert.present();
  }
*/

}
