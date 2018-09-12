import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the EditItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-item',
  templateUrl: 'edit-item.html',
})
export class EditItemPage {
  title = ''; 
  description = '';
  ids = '';
  constructor(public navParams: NavParams, public view: ViewController) {
    console.log('ionViewDidLoad EditItemPage');
    console.log(this.navParams.data);
    this.title = this.navParams.data.title; 
    this.description = this.navParams.data.description;
    this.ids = this.navParams.data.id ;
  }

  ionViewDidLoad() {
   
  }

  editItem() {
    let newItem = {
      title: this.title,
      description: this.description,
      id : this.ids
    };
    console.log(newItem);
    this.view.dismiss(newItem);
  }

  close() {
    this.view.dismiss();
  }
}
