import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DesignUtilityService } from '../../services/design-utility.service';

@Component({
  selector: 'app-catcherror-throwerror-operator',
  templateUrl: './catcherror-throwerror-operator.component.html',
  styleUrls: ['./catcherror-throwerror-operator.component.css']
})
export class CatcherrorThrowerrorOperatorComponent implements OnInit {

  url = 'https://dummyjson.com/products/categories';
  // allProducts:Observable<any>;
  allProducts: any;
  error: any;

  constructor(private http: HttpClient,private du:DesignUtilityService) { }

  ngOnInit(): void {
    // this.allProducts = this.http.get<any>(this.url);
    this.http.get<any>(this.url).pipe(catchError(this.du.handleError)).subscribe(res => {
      if (res) {
        this.allProducts = res;
      }else{
        (err)=>{
          this.error = err;
        }
      }
    });
  }
}
