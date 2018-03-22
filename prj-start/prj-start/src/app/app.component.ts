import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 item: number;
  onShowList(selected){
    console.log(selected);
    this.item = selected;
  }

}
