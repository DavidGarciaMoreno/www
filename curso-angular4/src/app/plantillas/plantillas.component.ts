import { Component } from '@angular/core';

@Component({
	selector: 'plantillas',
	templateUrl: './plantillas.component.html'
})
export class PlantillasComponent {
	public titulo: string;
	public administrador: boolean;

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
}