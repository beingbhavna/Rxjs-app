import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }
  // userName = new Subject<any>; // did not set default value
  userName = new BehaviorSubject<any>('Bhavna Sharma'); //set default value
  emitVideo = new ReplaySubject<any>(5,5000); //5 is a length of data and 5000 is a timeinterval to subscribe data
  print(elvalue, containerId) {
    let el = document.createElement('li');
    el.innerText = elvalue;
    document.getElementById(containerId).appendChild(el)
  }
}
