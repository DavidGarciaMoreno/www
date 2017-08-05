import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
    moduleId: module.id,
    templateUrl: 'product.template.html'
})
export class ProductComponent implements OnInit {
	products: Product[];
	productForm: boolean = false;
	isNewForm: boolean;
	newProduct: any = {};

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
		this.productForm = true;
		this.isNewForm = false;
		this.newProduct = product;
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
		} else {
			// update the existing product
		}
		this.productForm = false;
	}
}
