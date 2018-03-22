import { Component, OnChanges, DoCheck } from '@angular/core';
import { AppService } from './app.service';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent implements DoCheck {

 counter: number;
 constructor(private counterService: CounterService) {

 }
 ngDoCheck(): void {
    this.counter = this.counterService.counter;
  }
}
