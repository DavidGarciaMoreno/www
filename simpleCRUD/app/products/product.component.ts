import { Component, OnInit } from '@angular/core';
import { clone } from 'lodash';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
    moduleId: module.id,
    templateUrl: 'product.template.html'
})
export class ProductComponent implements OnInit {
	products: Product[];
	productForm: boolean = false;
	editProductForm: boolean = false;
	isNewForm: boolean;
	newProduct: any = {};
	editedProduct: any = {};

	constructor(private _productService: ProductService) {

	}

	ngOnInit() {
		this.getProducts();
	}

	getProducts() {
		this.products = this._productService.getProductsFromData();
	}

	showEditProductForm(product: Product) {
		if(!product) {
			this.productForm = false;
			return;
		}
		this.editProductForm = true;
		this.editedProduct = clone(product);
	}

	showAddProductForm() {
		// resets form if edited product
		if(this.products.length) {
			this.newProduct = {};
		}
		this.productForm = true;
		this.isNewForm = false;
	}

	saveProduct(product: Product) {
		if(this.newProduct) {
			// add a new product
			this._productService.addProduct(product);
		}
		this.productForm = false;
	}

	updateProduct() {
		this._productService.updateProduct(this.editedProduct);
		this.editProductForm = false;
		this.editedProduct = {};
	}

	removeProduct(product: Product) {
		this._productService.deleteProduct(product);
	}

	cancelEdits() {
		this.editedProduct = {};
		this.editProductForm = false;
	}
}
