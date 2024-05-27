import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-async-await',
  templateUrl: './async-await.component.html',
  styleUrls: ['./async-await.component.css']
})
export class AsyncAwaitComponent implements OnInit {
  item1: any;
  item2: any;
  item3: any;
  promise: any;
  apiData: any;
  dell = {
    Model: "Dell",
    Ram: "1tb",
    Memory: "32GB",
    Color:"Silver"
  }
  constructor() { }

  ngOnInit(): void {
    this.item1 = document.getElementById("item1");
    this.item2 = document.getElementById("item2");
    this.item3 = document.getElementById("item3");
    this.promise = new Promise((resolve, reject) => {
      setTimeout(()=>{
        resolve(this.dell);
      },3000);
    });
    this.apiData = fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json())
   
  }

//Ex 02 with promise
  onClick() {
    this.item1.innerText = "Fetching Data......."
    this.promise.then(res=>{
      this.item1.innerText = JSON.stringify(res);
    });
  }

//Ex 02 with async/await
 async onClick2() {
    this.item2.innerText = "Fetching Data......."
    let data = await this.promise;
      this.item2.innerText = JSON.stringify(data);
  }

//Ex 02 with async/await
 async onClick3() {
    this.item3.innerText = "Fetching Data......."
    let data = await this.apiData;
      this.item3.innerText = JSON.stringify(data);
  }
}
