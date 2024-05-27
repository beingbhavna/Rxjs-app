import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }
  print(elvalue,containerId) {
    let el = document.createElement('li');
    el.innerText = elvalue;
    document.getElementById(containerId).appendChild(el)
  }
}
