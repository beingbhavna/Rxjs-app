import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, retry, retryWhen, scan } from 'rxjs/operators';

@Component({
  selector: 'app-retry-operator',
  templateUrl: './retry-operator.component.html',
  styleUrls: ['./retry-operator.component.css']
})
export class RetryOperatorComponent implements OnInit {
  users: any;
  spinner: boolean = false;
  status: string = 'No Data';
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  fetchData() {
    this.spinner = true;
    this.http.get('https://jsonplaceholder.typicode.com/users')
      // .pipe(retry(3))
      .pipe(retryWhen(err => err.pipe(delay(3000), scan((retryCount) => {
        if (retryCount <= 5) {
          throw err
        } else {
          retryCount = retryCount + 1;
          console.log(retryCount);
          this.status = 'Retrying Attempt #' + retryCount;
          return retryCount
        }
      }, 0))
      ))
      .subscribe(res => {
        console.log(res);
        this.status = 'Data Fetched Successfully';
        this.users = res;
        this.spinner = false;
      }, (err) => {
        console.log(err);
        this.spinner = false;
        this.status = 'Error in Fetching Record';
      }
      );
  }
}
