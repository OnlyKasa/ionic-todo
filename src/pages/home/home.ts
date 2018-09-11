import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item';
import { ItemDetailPage } from '../item-detail/item-detail';
import { DataProvider } from '../../providers/data/data';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items: Array<{title: string, description: string}>;

  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    public data: DataProvider) {
      this.data.getData().then((todos) => {
        if (todos){
          this.items = todos ;
        }
      });

  }
 
  ionViewDidLoad() {
    this.items = [];
  }

  addItem() {
    console.log('add item');
    let addModal = this.modalCtrl.create(AddItemPage);
    addModal.onDidDismiss((item) => {
      if (item){
        this.saveItem(item);
      }
    });
    addModal.present();
  }

  viewItem(item: any){
    console.log(item);
    // let addModal = this.modalCtrl.create(AddItemPage, {
    //   item: item
    // })
    // addModal.onDidDismiss((item) => {
    //   if (item){
    //     this.saveItem(item);
    //   }
    // });
    // addModal.present();
    this.navCtrl.push(ItemDetailPage, {
      item: item
    })
  }

  saveItem(item: any) {
    this.items.push(item);
    this.data.saveData(this.items);
  }

  editItem(item: any){

  }

  deleteItem(){

  }
}
