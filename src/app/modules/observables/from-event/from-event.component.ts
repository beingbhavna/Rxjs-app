import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from '../../services/design-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit, AfterViewInit {
  @ViewChild('addBtn') addBtn: ElementRef;
  constructor(private designUtility: DesignUtilityService) { }

  ngOnInit(): void {

  }
  ngAfterViewInit() {
    let count = 1;
    fromEvent(this.addBtn.nativeElement, 'click').subscribe(res => {
      // console.log('video' + count++);
      let elvalue = 'video' + count++;
      this.designUtility.print(elvalue, 'elContainer');
      this.designUtility.print(elvalue, 'elContainer2');
    });
  }


}
