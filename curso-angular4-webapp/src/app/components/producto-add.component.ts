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

	constructor(
		private _productoService: ProductoService,
		private _route: ActivatedRoute,
		private _router: Router
	) {
		this.title = 'Crear un nuevo producto';
		this.product = new Producto(0, '', '', 0, '');
	}

	ngOnInit() {
		console.log('Componente producto-add cargado');
	}

	onSubmit() {
		console.log(this.product);
		this._productoService.addProducto(this.product).subscribe(
			response => {
				if(response.code == 200) {
					console.log('SUCCESS');
					this._router.navigate(['/productos']);
				} else {
					console.log(response);
				}
			},
			error => {
				console.log(<any>error);
			}
		);
	}
}
