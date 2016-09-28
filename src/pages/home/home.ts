import { Component } from '@angular/core';
import {NavController, Alert} from 'ionic-angular';
import {LocalNotifications} from 'ionic-native';

import { AboutPage } from '../about/about';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {
  aboutPage = AboutPage;

  constructor(private navController: NavController) {
    LocalNotifications.on("click", (notification, state) => {
      let alert = Alert.create({
        title: "Notification Clicked",
        subTitle: "You just clicked the scheduled notification",
        buttons: ["OK"]
      });
      this.navController = navController;
      //this.navController.present(alert);
      this.navController.push(alert);
    });
  }

  public schedule() {
    LocalNotifications.schedule({
      title: "Test Title",
      text: "Delayed Notification",
      at: new Date(new Date().getTime() + 5 * 1000),
      sound: null
    });
  }
}
