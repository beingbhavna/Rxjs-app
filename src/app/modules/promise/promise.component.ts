import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {
  public promiseData:any;
  dell = {
    Model: "dell",
    Ram: "1tb",
    Memory: "32GB",
    Color:"silver"
  }
  hp = {
    Model: "hp",
    Ram: "2tb",
    Memory: "64GB",
    Color:"black"
  }
  notAvail = {
    Model: "notAvail",
    Status: "falied"
  }

  constructor() { }

  ngOnInit(): void {
  }

  dellAvail() {
    return true;
  }

  hpAvail() {
    return false;
  }

  promiseCall() {
    let byPromise = new Promise((resolve, reject) => {
      if (this.dellAvail()) {
        return setTimeout(() => {
          resolve(this.dell);
        }, 1000);
      } else if (this.hpAvail()) {
        return setTimeout(() => {
          resolve(this.hp);
        }, 1000);
      } else {
        return setTimeout(() => {
          reject(this.notAvail);
        }, 1000);
      }
    });
    byPromise.then(res => {
      console.log("then code", res);
      // alert(res);
      this.promiseData = res;
    }).catch (res => {
      console.log("catch code", res);
      // alert(res);
      this.promiseData = res;
    });
  }
}
