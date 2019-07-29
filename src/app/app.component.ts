import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent {
  public appPages = [
    {
      title: 'Dashboard',
      url: '/home',
      icon: 'agi-view-dashboard'// nom de la class correspondant à l'icone agproicon
      },
    {
      title: 'List',
      url: '/list',
      icon: 'agi agi-view-list'
    },
    {
      title: 'Gauges',
      url: '/gauges',
      icon: 'agi agi-gauge'// on peut rajouter une classe si on veut definir une propriété commune
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
