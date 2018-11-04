import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MudarSenhaPage } from '../mudar-senha/mudar-senha';
import { HomePage } from '../home/home';
import { App} from 'ionic-angular';
import { LoginPage } from '../login/login';
import {AboutPage} from '../about/about';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth, private app: App) {

  }


  changePassword(){
    this.navCtrl.push(MudarSenhaPage);
  }

  about(){
    this.navCtrl.push(AboutPage);
  }

  logout(){
    this.afAuth.auth.signOut();
    this.app.getRootNav().setRoot(LoginPage)
  }

}
