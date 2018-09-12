import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item';
import { ItemDetailPage } from '../item-detail/item-detail';
import { DataProvider } from '../../providers/data/data';
import { EditItemPage } from '../edit-item/edit-item';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items: Array<{ id: string, title: string, description: string }>;

  constructor(public navCtrl: NavController,
    public modalCtrl: ModalController,
    public data: DataProvider) {
    this.data.getData().then((todos) => {
      if (todos) {
        this.items = todos;
      }
    });

  }

  ionViewDidLoad() {
    this.items = [];
  }

  /** add new */
  addItem() {
    console.log('add item');
    let addModal = this.modalCtrl.create(AddItemPage);
    addModal.onDidDismiss((item) => {
      if (item) {
        this.saveItem(item);
      }
    });
    addModal.present();
  }
  /** update  */
  updateItem(item: any) {
    console.log('update item');
    console.log(item);
    let updateModal = this.modalCtrl.create(EditItemPage, item);
    updateModal.onDidDismiss((item) => {
      if (item) {
        console.log(item);
        this.editItem(item);
      }
    });
    setTimeout( ()=>{
      updateModal.present();
    }, 300)
    
  }

  /** detail item */
  viewItem(item: any) {
    console.log(item);
    this.navCtrl.push(ItemDetailPage, {
      item: item
    })
  }

  /** call save in data  provider */
  saveItem(item: any) {
    this.items.push(item);
    this.data.storage.set('lastIndex', item.id);
    this.data.saveData(this.items);
  }

  /** call update in data provider */
  editItem(item: any) {
    console.log('call update in data provider');
    console.log(item);
    this.items.forEach((it,index) => {
      if (it.id === item) {
        this.items.slice(index,1);
        this.items.push(item);
      }

    });
    console.log(this.items);
    this.data.saveData(this.items);
  }

  deleteItem() {

  }
}
