import { Component } from '@angular/core';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';
import { SchedulePage } from '../schedule/schedule';
 import { LoginPage } from '../login/login';
import { AboutPage } from '../about/about';
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // set the root pages for each tab
  tab1Root: any = HelloIonicPage;
  tab2Root: any = SchedulePage;
  tab3Root: any = LoginPage;
  tab4Root: any = AboutPage;
  constructor(){}

}
