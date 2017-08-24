import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {
  public titulo: string;

  constructor() {
    this.titulo = 'Esta es la tienda';
  }

  ngOnInit() {
    $('#textojq').hide();
    $('#botonjq').click(function() {
      $('#textojq').slideToggle();
    });

    $('#caja').dotdotdot({});
  }

  textoRichEditor(content) {
    console.log(content)
  }
}