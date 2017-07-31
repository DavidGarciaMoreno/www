import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';

@Component ({
	selector: 'producto-add',
	templateUrl: '../views/producto-add.html',
	providers: [ProductoService]
})
export class ProductAddComponent {
	public title: string;
	public product: Producto;

	constructor() {
		this.title = 'Crear un nuevo producto';
		this.product = new Producto(0, '', '', 0, '');
	}

	ngOnInit() {
		console.log('Componente producto-add cargado');
	}

	onSubmit() {
		console.log(this.product);
	}
}
