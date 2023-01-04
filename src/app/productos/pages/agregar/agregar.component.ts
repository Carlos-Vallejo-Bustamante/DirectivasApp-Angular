import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent {

  miFormulario: FormGroup = this.formBuilder.group({
    nombre: ['', Validators.required]
  })

  constructor(private formBuilder: FormBuilder) { }

  campoValido(campo: string): boolean {
    return this.miFormulario.get(campo)?.invalid || false;
  }

}
