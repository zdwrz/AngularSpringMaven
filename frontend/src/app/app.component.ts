import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Apple} from './apple';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Test for Getting Data';
  data1 = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:8080/data').subscribe(data => {
      // Read the result field from the JSON response.
      this.data1 = data['msg'];
    });
  }

  onClickMe(): void {
    this.data1+='a';
  }

  onKey(event): void {
    this.data1+= event.target.value;
  }
}
