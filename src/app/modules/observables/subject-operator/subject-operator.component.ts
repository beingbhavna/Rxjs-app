import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../../services/design-utility.service';

@Component({
  selector: 'app-subject-operator',
  templateUrl: './subject-operator.component.html',
  styleUrls: ['./subject-operator.component.css']
})
export class SubjectOperatorComponent implements OnInit {
  userName: any;
  constructor(private designUtility: DesignUtilityService) { }

  ngOnInit(): void {
    this.designUtility.userName.subscribe(res => {
      this.userName = res;
    });
  }
}
