import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';

@Component ({
	selector: 'producto-edit',
	templateUrl: '../views/producto-add.html',
	providers: [ProductoService]
})
export class ProductEditComponent {
	public title: string;
	public product: Producto;
	public filesToUpload;
	public resultUpload;

	constructor(
		private _productService: ProductoService,
		private _route: ActivatedRoute,
		private _router: Router
	) {
		this.title = 'Editar producto';
		this.product = new Producto(1, '', '', 1, '');
	}

	ngOnInit() {
		console.log(this.title);
	}
}