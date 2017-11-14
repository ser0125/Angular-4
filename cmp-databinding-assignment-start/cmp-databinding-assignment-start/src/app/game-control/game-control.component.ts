import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent  {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  lastnumber = 0;
  constructor() {
  
   }
  

  startGame (){
    this.interval = setInterval(()=>
    {
       this.intervalFired.emit(this.lastnumber + 1);
       this.lastnumber++;
      }, 1000);
  }
  pauseGame(){
    clearInterval(this.interval);
  }
}



