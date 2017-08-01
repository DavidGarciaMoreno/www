import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';
import { GLOBAL } from '../services/global';

@Component ({
	selector: 'producto-add',
	templateUrl: '../views/producto-add.html',
	providers: [ProductoService]
})
export class ProductAddComponent {
	public title: string;
	public product: Producto;
	public filesToUpload;
	public resultUpload;

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
		console.log(this.filesToUpload[0]);

		this._productoService.makeFileRequest(GLOBAL.url+'upload-file', [], this.filesToUpload).then(
			(result) => {
				console.log(result);
		}, 
			(error) => {
				console.log(error);
		});

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

	fileChangeEvent(fileInput: any) {
		this.filesToUpload = <Array<File>>fileInput.target.files;
		console.log(this.filesToUpload);
	}
}
