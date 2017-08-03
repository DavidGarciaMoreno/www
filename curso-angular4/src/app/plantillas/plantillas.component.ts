import { Component } from '@angular/core';

@Component({
	selector: 'plantillas',
	templateUrl: './plantillas.component.html'
})
export class PlantillasComponent {
	public titulo: string;
	public administrador: boolean;
	public datos_del_hijo;

	public dato_externo = "David";
	public identity = {
		id: 1,
		web: 'asde.es',
		tematica: 'Desarrollo Web'
	};

	constructor() {
		this.titulo = 'Plantillas ngTemplate en Angular';
		this.administrador = true;
	}

	cambiar(value: boolean) {
		this.administrador = value;
	}

	recibirDatos(event) {
		console.log(event.nombre);
		this.datos_del_hijo = event;
	}
}