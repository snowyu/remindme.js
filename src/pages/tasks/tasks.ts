import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Tasks page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html'
})
export class Tasks {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Tasks Page');
  }

}
