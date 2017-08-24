import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'animals',
  templateUrl: './animals.component.html'
})
export class AnimalsComponent implements OnInit {
  private title = 'Animales';

  ngOnInit() {
    console.log('animals.component cargado !!')
    
  }
}