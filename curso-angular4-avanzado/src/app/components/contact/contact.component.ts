import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
  private title = 'Contacto';
  private emailContacto: string;

  ngOnInit() {
    console.log('contact.component cargado !!')
    
  }

  guardarEmail() {
    localStorage.setItem('emailContacto', this.emailContacto);
    console.log(localStorage.getItem('emailContacto'));
  }
}