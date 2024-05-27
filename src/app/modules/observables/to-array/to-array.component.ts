import { Component, OnInit } from '@angular/core';
import { from, interval, of } from 'rxjs';
import { take, toArray } from 'rxjs/operators'

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit {
  array = [
    {
      Name: 'Bhavna',
      Gender: 'Female',
      Education: 'MCA',
      Designation: 'Software Engineer'
    }
  ]
  toArray: any;
  arrayData: any;
  constructor() { }

  ngOnInit(): void {
    let data = interval(1000);
    data.pipe(take(5), toArray()).subscribe(res => {
      console.log(res);
    })

    //with from
    let data2 = from(this.array);
    data2.pipe(toArray()).subscribe(res => {
      this.toArray = res;
      console.log(res);
    })
    //with of
    let data3 = of('Bahvan','Sharma','Hello','world');
    data3.pipe(toArray()).subscribe(res => {
      this.arrayData = res;
      console.log(res);
    })
  }
}
