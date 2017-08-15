import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]', Selector by atribute
  selector: 'app-servers',
  //template: '<app-server></app-server><app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
		serverName='';
		allowNewServer=true;
		serverCreationStatus="No server was created";
  constructor() {
 /* setTimeout(()=>{
  		this.allowNewServer=false;
  	}, 2000)*/}

  ngOnInit() {
  }

  onUpdateServer(event:Event){
  //	this.serverName=(<HTMLInputElement>event.target).value;
  if(this.serverName){ 	
  	this.allowNewServer=false;
  }
  }
  onCreateServer() {

  		this.serverCreationStatus="Server was created "+ this.serverName;
  }

}
