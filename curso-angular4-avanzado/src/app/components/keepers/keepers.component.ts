import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'keepers',
  templateUrl: './keepers.component.html'
})
export class KeepersComponent implements OnInit {
  private title = 'Cuidadores';

  ngOnInit() {
    console.log('keepers.component cargado !!')
    
  }
}