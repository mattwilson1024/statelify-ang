import { Component, OnInit } from '@angular/core';
import { getGreeting } from 'statelify';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'statelify-ang';

  ngOnInit() {
    console.log(getGreeting());
  }
}
