import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component ({
	selector: 'empleado',
	templateUrl: './empleado.component.html'
})
export class EmpleadoComponent {
	public title = 'Componente Empleados:';
	public empleado: Empleado;
	public trabajadores: Array<Empleado>;
	public trabajador_externo: boolean;
	public color: string;
	public color_seleccionado: string;

  constructor() {
 		this.empleado = new Empleado('David Garcia', 45, 'Cocinero', true);
 		this.trabajadores = [
 			new Empleado('Lorena Rios', 26, 'Camarera', true),
 			new Empleado('Victor Robles', 36, 'Programador', false),
 			new Empleado('David Garcia', 45, 'Cocinero', true)
 		];
 		this.trabajador_externo = true;
 		this.color = 'blue';
 		this.color_seleccionado = '#ccc';
  }

	ngOnInit() {		
		console.log(this.empleado);
		console.log(this.trabajadores);
	}

	cambiarExterno(valor) {
		this.trabajador_externo = valor;
	}

	logColorSeleccionado() {
		console.log(this.color_seleccionado);
	}
}