import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  private title = 'Bienvenido a NGZOO';

  ngOnInit() {
    console.log('home.component cargado !!')
    
  }
}