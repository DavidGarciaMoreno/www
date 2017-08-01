import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';

@Component({
	selector: 'product-detail',
	templateUrl: '../views/producto-detail.html',
	providers: [ProductoService]
})
export class ProductDetailComponent {
	public producto: Producto;

	constructor (
		private _productoService: ProductoService,
		private _route: ActivatedRoute,
		private _router: Router
	) {}

	onInit() {
		console.log('producto-detail.component cargado');
	}
}
