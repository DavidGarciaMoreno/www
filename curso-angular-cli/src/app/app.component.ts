import { Component } from '@angular/core';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public toggleTitle() {
  	console.log('Click boton');
  	$('.title').slideToggle();
  }
}
