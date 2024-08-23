import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { concatMap, exhaustMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-exhaustmap-operator',
  templateUrl: './exhaustmap-operator.component.html',
  styleUrls: ['./exhaustmap-operator.component.css']
})
export class ExhaustmapOperatorComponent implements AfterViewInit {
  @ViewChild('btn') btn: ElementRef;
  url = 'https://jsonplaceholder.typicode.com/posts/1';
  num: number = 0;
  clickCount: any;
fetching:boolean=false;

  constructor(private http: HttpClient) { }

  ngAfterViewInit(): void {
    fromEvent(this.btn.nativeElement, 'click').pipe(exhaustMap(() => this.onSave(this.num++)),tap(() =>this.fetching = true)).subscribe(res => {
      this.onFetch();
      console.log(res);
      this.clickCount = res;
    });
  }

  onSave(count) {
    return this.http.put(this.url, { data: count })
  }

  onFetch() {
    this.http.get(this.url).subscribe(res => {
      console.log(res);
      this.fetching = false;
    });
  }
}
