import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home.component';
import { ProductosListComponent } from './components/productos-list.component';
import { ProductAddComponent } from './components/producto-add.component';
import { ErrorComponent } from './components/error.component';

const appRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'home', component: HomeComponent },
	{ path: 'productos', component: ProductosListComponent },
	{ path: 'crear-producto', component: ProductAddComponent },
	{ path: '**', component: ErrorComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
