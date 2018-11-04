import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { RocketsPage } from '../rockets/rockets';
import { CapsulesPage } from '../capsules/capsules';
import { LaunchpadsPage } from '../launchpads/launchpads';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = RocketsPage;
  tab3Root = CapsulesPage;
  tab4Root = LaunchpadsPage;
  tab5Root = ContactPage;

  constructor() {

  }
}
