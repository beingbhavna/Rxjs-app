import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from '../../services/design-utility.service';
import { from, of } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';

@Component({
  selector: 'app-concatmap-notification-operator',
  templateUrl: './concatmap-notification-operator.component.html',
  styleUrls: ['./concatmap-notification-operator.component.css']
})
export class ConcatmapNotificationOperatorComponent implements OnInit {
  notifyData = from([
    {
      icon: 'assets/images/whatsapp.jpg',
      time: '2 Second Ago',
      img: 'assets/images/whatsapp.jpg',
      name: 'Bhavna Sharma',
      p: 'Commented on your PhotoPost:Awesome Post!!!! Thanks...'
    },
    {
      icon: 'assets/images/whatsapp.jpg',
      time: '4 Second Ago',
      img: 'assets/images/whatsapp.jpg',
      name: 'Vibha',
      p: 'Commented on your PhotoPost:Awesome Post!!!! Thanks...'
    },
    {
      icon: 'assets/images/whatsapp.jpg',
      time: '6 Second Ago',
      img: 'assets/images/whatsapp.jpg',
      name: 'World',
      p: 'Commented on your PhotoPost:Awesome Post!!!! Thanks...'
    },
    {
      icon: 'assets/images/whatsapp.jpg',
      time: '8 Second Ago',
      img: 'assets/images/whatsapp.jpg',
      name: 'Hello',
      p: 'Commented on your PhotoPost:Awesome Post!!!! Thanks...'
    }
  ])
  constructor(private du: DesignUtilityService) { }

  ngOnInit(): void {
    this.notifyData.pipe(concatMap(res => this.getHtml(res))).subscribe(res => {
      this.du.print2(res, 'elContainer')
    })
  }
  getHtml(data) {
    return of(`<div class="header">
            <div class="app">
                <img src="${data.icon}" alt="" height="20">Whatsapp
            </div>
            <div class="time">${data.time}</div>
        </div>
    </div>
    <div class="body">
        <strong>${data.name}</strong>
        <p>${data.p}</p>
    </div>`).pipe(delay(2000));
  }

}
