import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  NgForm } from '@angular/forms';
import { ToastController } from 'ionic-angular';
import { ContactPage} from '../contact/contact';
import { AngularFireAuth } from '@angular/fire/auth';

/**
 * Generated class for the MudarSenhaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mudar-senha',
  templateUrl: 'mudar-senha.html',
})
export class MudarSenhaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,  public toastCtrl: ToastController, private afAuth: AngularFireAuth) {
  }

  
  ionViewDidLoad() {
    console.log('ionViewDidLoad MudarSenhaPage');
  }

  form_alteraSenha(f: NgForm) {
    if (!f.valid) {
      return;
    } console.log(f.controls.novaSenha.value, f.controls.repitaSenha.value);
    this.mudaSenha(f.controls.novaSenha.value, f.controls.repitaSenha.value);
  }

  presentToast( msg : string) {
    let toast = this.toastCtrl.create({
    message: msg,
    duration: 2000
    });
    toast.present();
  }

    mudaSenha( novaSenha: string, repitaSenha: string){

       console.log(novaSenha);
      if(novaSenha === repitaSenha){
        if(novaSenha.length > 5) {
            this.afAuth.auth.currentUser.updatePassword(novaSenha).then( ok => {
              this.presentToast('Senha atualizada com sucesso! ');
              this.navCtrl.push(ContactPage);
            });

        }else{
          this.presentToast(' Use senhas acima de 5 digitos. ')
        }

      } else {
        this.presentToast('As senhas não são iguais')
      }

    }
}
