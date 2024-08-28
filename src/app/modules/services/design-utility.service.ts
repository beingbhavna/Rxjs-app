import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {
  url = 'https://my-json-server.typicode.com/uxtrendz/apis/videoList'
  constructor(private http: HttpClient) { }
  // userName = new Subject<any>; // did not set default value
  userName = new BehaviorSubject<any>('Bhavna Sharma'); //set default value
  emitVideo = new ReplaySubject<any>(5, 5000); //5 is a length of data and 5000 is a timeinterval to subscribe data
  asyncVideoEmit = new AsyncSubject();

  print(elvalue, containerId) {
    let el = document.createElement('li');
    el.innerText = elvalue;
    document.getElementById(containerId).appendChild(el)
  }
  print2(elvalue, containerId) {
    let el = document.createElement('div');
    el.innerHTML = elvalue;
    el.setAttribute('class', 'item');
    document.getElementById(containerId).prepend(el)
  }
  getSearch(searchTerm): Observable<any> {
    return this.http.get<any>(this.url + '?q=' + searchTerm)
  }

  handleError(err: HttpErrorResponse) {
    let errMsg = '';
    if (!err.error || !err.error.error) {
      errMsg = 'There is some unknown error. please try again after some time'
    } else {
      if (err.error.error == 'Permission denied') {
        errMsg = 'You do not have permission to access this content';
      }
    }
    return throwError(errMsg)
  }
}
