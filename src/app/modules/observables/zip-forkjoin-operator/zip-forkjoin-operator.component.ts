import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, zip } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-zip-forkjoin-operator',
  templateUrl: './zip-forkjoin-operator.component.html',
  styleUrls: ['./zip-forkjoin-operator.component.css']
})
export class ZipForkjoinOperatorComponent implements OnInit, AfterViewInit {
  nameSource = ['Bhavna', 'Vishnu', 'Krishna', 'Hem', 'Gunjan', 'Chirag'];
  colorSource = ['pink', 'red', 'green', 'blue', 'orange', 'yellow'];
  //template refrence
  @ViewChild('name') name: ElementRef;
  @ViewChild('color') color: ElementRef;

  constructor() { }
  ngAfterViewInit(): void {
    //observables
    const nameObs = fromEvent<any>(this.name.nativeElement, 'change').pipe(map(res => res.target.vaue))
    const colorObs = fromEvent<any>(this.color.nativeElement, 'change').pipe(map(res => res.target.vaue))

    //Ex - 01
    zip(nameObs, colorObs).subscribe(res => {
      console.log(res);
      this.createBox(nameObs, colorObs,'elContainer')
    });
  }

  createBox(name, color, containerId) {
    let el = document.createElement('div');
    el.innerText = name;
    el.setAttribute('class', color);
    document.getElementById(containerId).appendChild(el)
  }

  ngOnInit(): void {
  }

}
