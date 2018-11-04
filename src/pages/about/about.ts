import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  public info: any = [];

  constructor(public http: Http, public navCtrl: NavController, public navParams: NavParams) {

    this.http.get('https://api.spacexdata.com/v3/info').map(res => res.json()).subscribe(data => {
      this.info = data; 
      console.log(data);
    });
  }

}
