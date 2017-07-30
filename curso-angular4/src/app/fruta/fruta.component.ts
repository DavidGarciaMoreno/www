import { Component } from '@angular/core';

@Component({
	selector: 'fruta',
	templateUrl: './fruta.component.html'
})
export class FrutaComponent {
	public nombre_componente = 'Componente de fruta';
	public listado_frutas = 'Naranja, Manzana, Pera y Sandia';

	public nombre:string;
	public trabajos:Array<any> = ['Carpintero', 44, 'Fontanero'];

	constructor() {
		this.nombre = 'David';
		this.holaMundo();
	}

	ngOnInit(){
		// Variables y alcance
		var uno = 8;
		var dos = 15;

		if (uno === 8) {
			console.log("Dentro del IF");
		}
	}

	holaMundo() {
		console.log('Hola Mundo');
	}
}