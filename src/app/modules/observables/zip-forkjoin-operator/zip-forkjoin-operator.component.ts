import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { forkJoin, fromEvent, zip } from 'rxjs';
import { map, take } from 'rxjs/operators';

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
    const nameObs = fromEvent<any>(this.name.nativeElement, 'change').pipe(map(event => event.target.value),take(4));
    const colorObs = fromEvent<any>(this.color.nativeElement, 'change').pipe(map(event => event.target.value),take(3));

    //Ex - 01
    zip(nameObs, colorObs).subscribe(([name,color]) => {
      console.log(name,color);
      this.createBox(name, color,'elContainer')
    });
    forkJoin(nameObs, colorObs).subscribe(([name,color]) => {
      console.log(name,color);
      this.createBox(name, color,'elContainer2')
    });
  }

  createBox(name, color, containerId) {
    let el = document.createElement('div');
    el.innerText = name;
    el.setAttribute("class", color);
    document.getElementById(containerId).appendChild(el)
  }

  ngOnInit(): void {
  }

}
