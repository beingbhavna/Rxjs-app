import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-share-replay-operator',
  templateUrl: './share-replay-operator.component.html',
  styleUrls: ['./share-replay-operator.component.css']
})
export class ShareReplayOperatorComponent implements OnInit {
url = 'https://dummyjson.com/products/categories';
allProducts:Observable<any>;
fragrances:any;
furniture:any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.allProducts = this.http.get<any>(this.url).pipe(shareReplay());
    this.fragrances = this.allProducts.pipe(map(res => res.filter(ele =>{ 
      return ele['slug'] == 'fragrances'
    })
  ))
    this.furniture = this.allProducts.pipe(map(res => res.filter(ele =>{ 
      return ele['slug'] == 'furniture'
    })
  ))
  }

}
