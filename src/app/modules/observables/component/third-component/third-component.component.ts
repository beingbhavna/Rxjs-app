import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/modules/services/design-utility.service';

@Component({
  selector: 'app-third-component',
  templateUrl: './third-component.component.html',
  styleUrls: ['./third-component.component.css']
})
export class ThirdComponentComponent implements OnInit {
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
