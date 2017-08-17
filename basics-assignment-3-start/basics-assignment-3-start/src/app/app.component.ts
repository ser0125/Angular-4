import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	showPass=false;
	arrayDetail=[];
	displayPass(){
		this.showPass=!this.showPass;
		this.arrayDetail.push(this.arrayDetail.length+1);
	}
}
