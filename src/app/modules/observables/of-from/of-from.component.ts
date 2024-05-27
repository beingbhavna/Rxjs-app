import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../../services/design-utility.service';
import { from, of } from 'rxjs';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit {
  obsMsg: any;
  constructor(private designUtility: DesignUtilityService) { }

  ngOnInit(): void {
    const ofData = of('Bhavna', 'Sharma', 'Dixit');
    ofData.subscribe(res => {
      this.designUtility.print(res, 'elContainer');
    });
    let ofData2 = of({ a: 'Bhavna', b: 'Sharma', c: 'Dixit' });
    ofData2.subscribe(res => {
      this.obsMsg = res;
    });

    //from array
    let arr = ['hello', 'world', 'how', 'are', 'you'];
    const ofData3 = from(arr);
    ofData3.subscribe(res => {
      this.designUtility.print(res, 'elContainer2');
    });

    //from Promise
    let promise = new Promise(resolve => {
      setTimeout(() => {
        resolve("Promise Resolved");
      }, 3000);
    });
    const ofData4 = from(promise);
    ofData4.subscribe(res => {
      this.designUtility.print(res, 'elContainer3');
    });

    //From String
    const ofData5 = from('Welcome to the world');
    ofData5.subscribe(res => {
      this.designUtility.print(res, 'elContainer4');
    });
  }

}
