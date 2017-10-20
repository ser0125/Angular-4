import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
@Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
@Output() bluePrintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
 // newServerContent = '';
 @ViewChild('nameContent') newServerContent: ElementRef;
  constructor() { }

  ngOnInit() {
  }
   onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
       serverContent: this.newServerContent.nativeElement.value
      });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
  this.bluePrintCreated.emit({
    serverName: nameInput.value,
    serverContent: this.newServerContent.nativeElement.value
  })  
  }

}
