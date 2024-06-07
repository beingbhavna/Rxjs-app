import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/modules/services/design-utility.service';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  userName: any;
  constructor(private designUtility: DesignUtilityService) { }

  ngOnInit(): void {
    this.designUtility.userName.subscribe(res => {
      this.userName = res;
    });
  }

  saveData(uname) {
    console.log(uname.value);
    this.designUtility.userName.next(uname.value);
    this.userName = uname.value;
  }
}
