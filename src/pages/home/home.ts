import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireDatabase,AngularFireList } from 'angularfire2/database';

import { Locations} from '../../model/locations'
import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private mydataListRef$ :AngularFireList<Locations>
  constructor(public navCtrl: NavController,public db:AngularFireDatabase) {
    this.mydataListRef$=this.db.list('MyInfo')
  }
  navigateToAddShoppingPage() {
    this.navCtrl.push(AboutPage)
  }

}
