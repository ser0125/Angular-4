import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
		username='';
		allowReset=false;



		newEntry(event:Event){
				if(this.username){
					this.allowReset=true;

		}
				}
				resetUsername(){
					this.username='';
				}

}
