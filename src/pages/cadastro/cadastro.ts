import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { ToastController } from 'ionic-angular';
import { AngularFireAuth } from '@angular/fire/auth';



/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  constructor(public navCtrl: NavController, public afAuth: AngularFireAuth, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  form_cadastro(f: NgForm) {
    if (!f.valid) {
      this.presentToast("Insira os dados.");
      return;
    }
    if (f.controls.password.value == f.controls.password2.value) {
      this.afAuth.auth.createUserWithEmailAndPassword(f.controls.email.value, f.controls.password.value).then(ok => {
        this.presentToast('Cadastro realizado com sucesso!');
        this.navCtrl.popToRoot();
      }).catch((e) => {
        this.presentToast(e);
      });
    } else {
      this.presentToast("As senhas são diferentes! ")
    }

  }

  presentToast(msg: string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }



}