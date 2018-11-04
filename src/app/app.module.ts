import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CapsulesPage } from '../pages/capsules/capsules';
import { RocketsPage } from '../pages/rockets/rockets';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpModule } from '@angular/http';
import { MudarSenhaPage } from '../pages/mudar-senha/mudar-senha';
import { LaunchpadsPage } from '../pages/launchpads/launchpads';



var config = {
  apiKey: "AIzaSyBdzAmM9IuIiC1S7VdzgCQKliUH_SUHtVE",
  authDomain: "spacex-f4d51.firebaseapp.com",
  databaseURL: "https://spacex-f4d51.firebaseio.com",
  projectId: "spacex-f4d51",
  storageBucket: "spacex-f4d51.appspot.com",
  messagingSenderId: "1034708333912"
};


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage, 
    LoginPage,
    CapsulesPage,
    RocketsPage,
    CadastroPage, 
    MudarSenhaPage,
    LaunchpadsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp), 
    AngularFireModule.initializeApp(config), 
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage, 
    LoginPage, 
    CapsulesPage, 
    RocketsPage, 
    CadastroPage,
    MudarSenhaPage,
    LaunchpadsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireAuth,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
