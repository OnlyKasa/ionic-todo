import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage'
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

  constructor(public storage: Storage) {
    console.log('Hello DataProvider Provider');
  }

  getData() {
    return this.storage.get('todos');
  }

  getLastIndex() {
    return this.storage.get('lastIndex');
  }

  saveData(data) {
    console.log(data);
    this.storage.remove('todos');
    this.storage.set('todos', data);
  }
}
