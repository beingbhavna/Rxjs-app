import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map, pluck, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-pluck-operator',
  templateUrl: './pluck-operator.component.html',
  styleUrls: ['./pluck-operator.component.css']
})
export class PluckOperatorComponent implements OnInit {
  public nameList: any;
  public jobList:any;
  constructor() { }

  ngOnInit(): void {
    let data = [
      {
        name: 'Bhavna',
        Skill: 'Angular',
        job:{
          title:'Angular Developer'
        }
      },
      {
        name: 'Vishnu',
        Skill: '.Net',
        job:{
          title:'Backend Developer'
        }
      },
      {
        name: 'Ankit',
        Skill: 'Javascript',
        job:{
          title:'UI Developer'
        }
      }
    ]
    from(data).pipe(pluck('name'), toArray()).subscribe(res => {
      this.nameList = res,
      console.log(res);
    });
    from(data).pipe(pluck('job','title'), toArray()).subscribe(res => {
      this.jobList = res,
      console.log(res);
    });

  }

}
