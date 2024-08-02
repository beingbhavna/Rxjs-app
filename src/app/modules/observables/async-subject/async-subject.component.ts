import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../../services/design-utility.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.css']
})
export class AsyncSubjectComponent implements OnInit {
  asyncVideoEmit: any;

  constructor(private designUtilityService: DesignUtilityService) { }

  ngOnInit(): void {
    this.designUtilityService.asyncVideoEmit.subscribe(res =>{
      this.asyncVideoEmit =res;
    });
  }

  addVideo(video) {
    console.log(video.value);
    this.designUtilityService.asyncVideoEmit.next(video.value);
  }
  toComplete() {
    this.designUtilityService.asyncVideoEmit.complete();
  }
}
