import{ Component, EventEmitter, Output } from "@angular/core";

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html'
})
export class HeaderComponent{

@Output() header = new EventEmitter<number>();

	showList(selected) {
		console.log(selected);
		if( selected==1 ){
 	this.header.emit(1);
	}else{
		this.header.emit(2);
	}
}
}
