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
  apple: Apple;

  constructor(private http: HttpClient) {
    this.apple = new Apple;
    this.apple['result'] = '123';
  }

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
  onEnter(value: string): void { this.data1 += value; }

  onSubmit(): void {
    console.log('1234');
  }
}
