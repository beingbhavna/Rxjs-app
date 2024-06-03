import { Component, OnInit } from '@angular/core';
import { Subscription, from, interval, of } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { DesignUtilityService } from '../../services/design-utility.service';

@Component({
  selector: 'app-map-function',
  templateUrl: './map-function.component.html',
  styleUrls: ['./map-function.component.css']
})
export class MapFunctionComponent implements OnInit {
  //unsubscribe
  unsub1: Subscription;
  unsub2: Subscription;
  //messages
  msg1: any;
  msg2: any;
  msg3: any;
  constructor(private designUtility: DesignUtilityService) { }

  ngOnInit(): void {
    let commanInterval = interval(1000);
    //Ex 01 
    this.unsub1 = commanInterval.pipe(map((data) => 'video : ' + data)).subscribe(res => {
      this.msg1 = res;
      // console.log(this.msg1)
    });
    setTimeout(() => {
      this.unsub1.unsubscribe();
    }, 10000);

    //Ex-02
    this.unsub2 = commanInterval.pipe(map((data) => data * 3)).subscribe(res => {
      this.msg2 = res;
    });
    setTimeout(() => {
      this.unsub2.unsubscribe();
    }, 10000);

    //Ex 03
    const members = from([
      { id: 0, name: 'Hello' },
      { id: 1, name: 'Bhavna' },
      { id: 2, name: 'Himanshi' },
      { id: 3, name: 'Radhika' },
      { id: 4, name: 'Prashant' },
      { id: 5, name: 'Govind' },
      { id: 6, name: 'Gaurav' },
      { id: 7, name: 'Rajesh' },
      { id: 8, name: 'Gunjan' },
      { id: 9, name: 'Chirag' },
    ]);
    members.pipe(map((data) => data.name)).subscribe(res => {
      this.msg3 = this.designUtility.print(res, "elContainer");
      console.log(res);
    });
  }

}
