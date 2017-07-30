import { Injectable } from '@angular/core';

@Injectable()
export class RopaService {
	public nombre_prenda = 'Pantalones vaqueros';
	public coleccion_ropa = ['Pantalones blancos', 'Camiseta roja'];

	prueba() {
		return this.nombre_prenda;
	}

	addRopa(nombre_prenda: string): Array<string> {
		this.coleccion_ropa.push(nombre_prenda);
		return this.getRopa();
	}

	deleteRopa(index: number): Array<string> {
		this.coleccion_ropa.splice(index, 1);
		return this.getRopa();
	}

	getRopa(): Array<string> {
		return this.coleccion_ropa;
	}
}