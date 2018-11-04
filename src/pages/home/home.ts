import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public launch: any = [];
  public date;
  public falta;
  public segundos;
  public dias;
  public minutos;
  public horas;
  public rocket;

  constructor(public http: Http, public navCtrl: NavController) {
    this.http.get('https://api.spacexdata.com/v3/launches/next').map(res => res.json()).subscribe(data => {
      this.launch = data;
      console.log(data);
      this.rocket = data.rocket.rocket_name;
      this.falta = (new Date(data.launch_date_local).getTime() - new Date().getTime()) / 1000;
      this.segundos = Math.round(this.falta % 60);
      this.minutos = Math.round(this.falta / 60 % 60);
      this.horas = Math.round(this.falta / 60 / 60 % 24);
      this.dias = Math.round(this.falta / 60 / 60 / 24);
    });

    setInterval(() => {
      this.tempo();
    }, 1000);
  }

  tempo() {
    if (this.segundos == 0) {
      this.segundos = 60;
      this.minutos--;
    }
    if (this.minutos == 0) {
      this.minutos = 60;
      this.horas--;
    }
    if (this.horas == 0) {
      this.horas = 24;
      this.dias--;
    }
    this.segundos--;
  }
}
