import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {

  promiseValues: any;
  dell = {
    brand: 'Dell',
    hardDisk: '2 TB SSG',
    color: 'Black',
    status: 'Success'
  }
  hp = {
    brand: 'Hp',
    hardDisk: '1 TB SSG',
    color: 'Silver',
    status: 'Success'
  }
  notAvailable = {
    brand: 'Not Available',
    status: 'Failed'
  }
  constructor() { }

  dellAvailable() {
    return true;

  }
  hpAvailable() {
    return false;
  }
  ngOnInit(): void {
    let buyLaptop = new Promise((resolve, reject) => {
      if (this.dellAvailable()) {
        return setTimeout(() => {
          // resolve('Dell is Available');
          resolve(this.dell);
        }, 3000);
      } else if (this.hpAvailable()) {
        return setTimeout(() => {
          // resolve('Hp is Purchase');
          resolve(this.hp);
        }, 3000);
      } else {
        return setTimeout(() => {
          // reject('Laptop is not available in the store');
          reject(this.notAvailable);
        }, 3000);
      }
    });
    buyLaptop.then(res => {
      console.log('resolve =>', res);
      this.promiseValues = res;
    }).catch(err => {
      console.log('reject =>', err);
      this.promiseValues = err;
    });
  }
}
