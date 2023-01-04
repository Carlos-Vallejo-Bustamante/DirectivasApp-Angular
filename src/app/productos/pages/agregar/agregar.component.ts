import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [

  ]
})
export class AgregarComponent {

  color: string = 'green';
  texto1: string = 'Carlos Vallejo'

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: ['', Validators.required]
  })

  constructor(private formBuilder: FormBuilder) { }

  campoValido(campo: string): boolean {
    return this.miFormulario.get(campo)?.invalid || false;
  }

  cambiarColor() {
    const color: string = "#xxxxxx".replace(/x/g, y => (Math.random() * 16 | 0).toString(16));
    this.color = color;
  }

  cambiarNombre() {
    this.texto1 = Math.random().toString();
  }

}
