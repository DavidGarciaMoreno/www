import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';
import { GLOBAL } from '../services/global';

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
	public is_edit;

	constructor(
		private _productService: ProductoService,
		private _route: ActivatedRoute,
		private _router: Router
	) {
		this.title = 'Editar producto';
		this.product = new Producto(1, '', '', 1, '');
		this.is_edit = true;
	}

	ngOnInit() {
		console.log(this.title);
		this.getProduct();
	}

	onSubmit() {
		console.log(this.product);
		
		if(this.filesToUpload && this.filesToUpload.length >= 1) {
			this._productService.makeFileRequest(GLOBAL.url+'upload-file', [], this.filesToUpload).then(
				(result) => {
					console.log(result);
					this.resultUpload = result;
					this.product.image = this.resultUpload.filename;
					this.updateProducto();					
			}, 
				(error) => {
					console.log(error);
			});
		} else {
			this.updateProducto();					
		}
	}

	updateProducto() {
		console.log('updateProducto <<<<<<');		
		this._route.params.forEach((params: Params) => {
			let id = params['id'];		
	
			console.log('before editProducto <<<<<<');
			this._productService.editProducto(id, this.product).subscribe(
				response => {
					if(response.code == 200) {
						this._router.navigate(['/producto', id]);
					} else {
						console.log(response);
					}
				},
				error => {
					console.log('updateProducto: '+<any>error);
				}
			);		
		});
	}

	fileChangeEvent(fileInput: any) {
		this.filesToUpload = <Array<File>>fileInput.target.files;
		console.log(this.filesToUpload);
	}

	getProduct() {
		this._route.params.forEach((params: Params) => {
			let id = params['id'];

			this._productService.getProducto(id).subscribe(
				response => {
					if(response.code == 200) {
						this.product = response.data;
					} else {
						this._router.navigate(['/productos']);
					}
				},
				error => {
					console.log(<any>error);
				}
			);
		});
	}
}