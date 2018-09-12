import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the AddItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {

  title = ''; 
  description = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, public data: DataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddItemPage');
  }

  saveItem() {
    this.data.getLastIndex().then((id) => {
      
      if ( id === null || typeof id === 'undefined'){
        id = 0 ;
      }
      console.log(id);
      let newItem = {
        id: id + 1,
        title: this.title,
        description: this.description
      };
      this.view.dismiss(newItem);
    })
    
  }

  close() {
    this.view.dismiss();
  }
}
