import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-filter-operator',
  templateUrl: './filter-operator.component.html',
  styleUrls: ['./filter-operator.component.css']
})
export class FilterOperatorComponent implements OnInit {
  dataByLength: any;
  dataByGender: any;
  dataById: any;
  public members = [
    { id: 0, name: 'Hello', gender: 'Female' },
    { id: 1, name: 'Bhavna', gender: 'Female' },
    { id: 2, name: 'Himanshi', gender: 'Female' },
    { id: 3, name: 'Radhika', gender: 'Female' },
    { id: 4, name: 'Prashant', gender: 'Male' },
    { id: 5, name: 'Govind', gender: 'Male' },
    { id: 6, name: 'Gaurav', gender: 'Male' },
    { id: 7, name: 'Rajesh', gender: 'Male' },
    { id: 8, name: 'Gunjan', gender: 'Female' },
    { id: 9, name: 'Chirag', gender: 'Male' },
  ]
  constructor() { }

  ngOnInit(): void {
    let dataArr = from(this.members);
    // Ex - 01
    dataArr.pipe(filter(el => el.name.length > 6), toArray()).subscribe(res => {
      console.log(res);
      this.dataByLength = res;
    });

    // Ex - 02
    dataArr.pipe(filter(el => el.gender == 'Male'), toArray()).subscribe(res => {
      console.log(res);
      this.dataByGender = res;
    });
    
    // Ex - 03
    dataArr.pipe(filter(el => el.id <= 6), toArray()).subscribe(res => {
      console.log(res);
      this.dataById = res;
    });
  }
}
