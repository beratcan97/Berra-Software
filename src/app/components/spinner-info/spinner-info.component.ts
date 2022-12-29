import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner-info',
  templateUrl: './spinner-info.component.html',
  styleUrls: ['./spinner-info.component.scss']
})
export class SpinnerInfoComponent implements OnInit {
  cirkel1Spinner: boolean = false;
  cirkel2Spinner: boolean = false;
  cirkel3Spinner: boolean = false;

  cirkel1Content: boolean = false;
  cirkel2Content: boolean = false;
  cirkel3Content: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  containerClicked(itemId: number): void {
    // Spin
    if(itemId === 1) {
      this.cirkel1Spinner = true;
    } else if (itemId === 2) {
      this.cirkel2Spinner = true;
    } else if (itemId === 3) {
      this.cirkel3Spinner = true;
    }

    // Change content
    setTimeout(() => {
      if(itemId === 1) {
        this.cirkel1Content = !this.cirkel1Content;
      } else if (itemId === 2) {
        this.cirkel2Content = !this.cirkel2Content;
      } else if (itemId === 3) {
        this.cirkel3Content = !this.cirkel3Content;
      }

      this.cirkel1Spinner = false;
      this.cirkel2Spinner = false;
      this.cirkel3Spinner = false;
  }, 1000);
  }

}
