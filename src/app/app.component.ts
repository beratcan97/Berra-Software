import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'berraSoftware';
  version: string = '2.1.1.1.1V';

  ngOnInit(): void {
    console.log("current version: " + this.version);
  }
}