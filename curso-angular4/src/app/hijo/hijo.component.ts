import { Component, Input } from '@angular/core';

@Component({
	selector: 'componente-hijo',
	templateUrl: 'hijo.component.html'
})
export class HijoComponent {
	public title: string;

	@Input() propiedad_uno: string;
	@Input('texto_dos') propiedad_dos: string;
	@Input() propiedad_tres: string;
	@Input() propiedad_cuatro: string;

	constructor() {
		this.title = "Componente hijo";
	}

	ngOnInit() {
		console.log(this.propiedad_tres);
		console.log(this.propiedad_cuatro);
	}
}