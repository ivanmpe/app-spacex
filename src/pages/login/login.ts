import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';
import {  NgForm } from '@angular/forms';
import { CadastroPage} from '../cadastro/cadastro';
import { ToastController } from 'ionic-angular';
import { TabsPage} from '../tabs/tabs';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor( public afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }



  presentToast(msg: string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  paginaCadastro(){
    this.navCtrl.push(CadastroPage);
  }

  form_login (f: NgForm) {
    if (!f.valid) {
      this.presentToast("Insira email e senha.");
      return;
    }
    this.afAuth.auth.signInWithEmailAndPassword(f.controls.email.value, f.controls.password.value).then(ok => {
      this.navCtrl.push(TabsPage);
    }).catch((error)=>{
        this.presentToast(error);
    }); 
  }

}

