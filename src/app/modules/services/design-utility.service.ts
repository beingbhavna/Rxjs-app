import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }
  // userName = new Subject<any>; // did not set default value
  userName = new BehaviorSubject<any>('Bhavna Sharma'); //set default value
  print(elvalue, containerId) {
    let el = document.createElement('li');
    el.innerText = elvalue;
    document.getElementById(containerId).appendChild(el)
  }
}
