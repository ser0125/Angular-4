import { Component,
   OnInit,
   Input,
   ViewEncapsulation,
   OnChanges,
   SimpleChanges,
   DoCheck,
   AfterContentInit,
   AfterContentChecked,
   AfterViewInit,
   AfterViewChecked,
   OnDestroy } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],

})
export class ServerElementComponent implements OnInit,
 OnChanges,
  DoCheck,
   AfterContentInit,
   AfterContentChecked,
   AfterViewInit,
   AfterViewChecked,
   OnDestroy {
@Input('srvElement') element: {type: string, name: string, content: string};
@Input() name: String;
  constructor() {
console.log('hola sergio');

   }
   ngOnChanges(changes: SimpleChanges) {
console.log(changes);
   }

  ngOnInit() {
    console.log('nginit');
  }
  ngDoCheck() {
    console.log('ngchecking');
  }
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

}
