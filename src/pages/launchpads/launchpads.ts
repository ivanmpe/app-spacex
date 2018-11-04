import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';


@IonicPage()
@Component({
  selector: 'page-launchpads',
  templateUrl: 'launchpads.html',
})
export class LaunchpadsPage {

  public launchpads: any = [];

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams) {

    this.http.get('https://api.spacexdata.com/v3/launchpads').map(res => res.json()).subscribe(data => {
      this.launchpads = data; 
      console.log(data);
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchpadsPage');
   
  }

}
