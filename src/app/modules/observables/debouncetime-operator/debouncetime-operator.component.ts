import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-debouncetime-operator',
  templateUrl: './debouncetime-operator.component.html',
  styleUrls: ['./debouncetime-operator.component.css']
})
export class DebouncetimeOperatorComponent implements OnInit, AfterViewInit {
  @ViewChild('myInput') myInput: ElementRef;
  resData = null;
  @ViewChild('myInput2') myInput2: ElementRef;
  resData2 = null;
  constructor(
    // private loadingBar:LoadingBarService
  ) { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    let searchValue = fromEvent<any>(this.myInput.nativeElement, 'keyup').pipe(map(event => event.target.value), debounceTime(500));
    //Ex - 01
    searchValue.subscribe(res => {
      console.log(res);
      this.resData = res;
      // this.loadingBar.start();
      setTimeout(() => {
        this.resData = null;
        // this.loadingBar.stop();
      }, 1000)
    });

    //Ex - 02
    let searchValue2 = fromEvent<any>(this.myInput.nativeElement, 'keyup').pipe(map(event => event.target.value), distinctUntilChanged());
    searchValue2.subscribe(res => {
      console.log(res);
      this.resData2 = res;
      // this.loadingBar.start();
      setTimeout(() => {
        this.resData2 = null;
        // this.loadingBar.stop();
      }, 1000)
    });
  }
}
