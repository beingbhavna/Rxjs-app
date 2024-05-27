import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DesignUtilityService } from '../../services/design-utility.service';

@Component({
  selector: 'app-custom-observables',
  templateUrl: './custom-observables.component.html',
  styleUrls: ['./custom-observables.component.css']
})
export class CustomObservablesComponent implements OnInit, OnDestroy {
  techStatus: any;
  techStatus2: any;
  subs: Subscription;
  name: any;
  nameStatus: any;
  constructor(private designUtility: DesignUtilityService) { }

  ngOnInit(): void {
    //Ex 01 manual
    let obj1 = Observable.create((observer) => {
      setTimeout(() => {
        observer.next("HTML")
      }, 1000);
      setTimeout(() => {
        observer.next("CSS")
      }, 2000);
      setTimeout(() => {
        observer.next("Javascript")
      }, 3000);
      setTimeout(() => {
        observer.next("Typescript")
      }, 4000);
      setTimeout(() => {
        observer.next("Angular")
        observer.error("Limit Exceed");
      }, 5000);
      setTimeout(() => {
        observer.next("Rxjs")
        // observer.complete("Completed");
      }, 6000);
    });
    obj1.subscribe((res) => {
      this.designUtility.print(res, 'elContainer');
      // console.log(res); 
      // subscribe(data,error,completion)
    },
      (err) => {
        this.techStatus = 'error';
      },
      () => {
        this.techStatus = 'completed';
      });

    // Ex - 2 custom intervals
    let arr = ['HTML', 'CSS', 'Javascript', 'typescript', 'Angular', 'Rxjs']
    let obj2 = new Observable(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(arr[count])
        // if(count>=6){
        //   observer.complete();
        // }
        if (count >= 5) {
          observer.complete();
        }
        count++;
      }, 1000);
    })
    this.subs = obj2.subscribe(res => {
      this.designUtility.print(res, 'elContainer2')
      // console.log(res);
    }, (err) => {
      this.techStatus2 = 'error';
    }, () => {
      this.techStatus2 = 'completed'
    }
    );

    //Ex - 03 [Random Names]
    let arr2 = ['Hello', 'World', 'How', 'Are', 'You']
    let obj3 = new Observable(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(arr2[count])
        // if (count >= 4) {
        //   observer.complete();
        // }
        if (count >= 4) {
          observer.error();
        }
        count++;
      }, 1000);
    });
    obj3.subscribe(res => {
      this.name = res;
      console.log(res);
    }, (err) => {
      this.nameStatus = 'error';
    },
      () => {
        this.nameStatus = 'completed';
      },
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

}
