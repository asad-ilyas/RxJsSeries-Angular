import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Async-Await',
  templateUrl: './Async-Await.component.html',
  styleUrls: ['./Async-Await.component.scss']
})
export class AsyncAwaitComponent implements OnInit {
  public result1: any;
  public result2: any;
  public result3: any;
  public dell = {
    brand: 'Dell',
    hardDisk: '2 TB',
    color: 'Black'
  }
  constructor() {

  }

  ngOnInit() {
  }
  public buyLaptop = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(this.dell);
    }, 3000)
  })
  public buyLaptop2 = fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
  // Ex - 01 : With Promise
  fetch1() {
    this.result1 = document.getElementById('result1');
    this.result1.innerText = 'Fetching Data1 ....';
    this.buyLaptop.then(res => {
      console.log(res);
      this.result1.innerText = JSON.stringify(res);

    });
  }
  // Ex - 02 : With Async / Await
  async fetch2() {
    this.result2 = document.getElementById('result2');
    this.result2.innerText = 'Fetching Data2 ....';

    const data = await this.buyLaptop;
    this.result2.innerText = JSON.stringify(data);

  }
  // Ex - 03 : With Fetch Api
  fetch3() {
    this.result3 = document.getElementById('result3');
    this.result3.innerText = 'Fetching Data3 ....';
    console.log('working');
    this.buyLaptop2.then(response => {
      this.result3.innerText = JSON.stringify(response);
    });

  }

}
