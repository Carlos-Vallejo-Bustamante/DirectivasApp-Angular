import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit {

  @Input() color: string = 'red';
  @Input() mensaje: string = 'Debe ingresar este campo';

  htmlElement: ElementRef<HTMLElement>;

  constructor(private element: ElementRef<HTMLElement>) {
    this.htmlElement = element;
  }

  ngOnInit(): void {
    this.setColor();
    this.setMensaje();
    this.setClase();
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this.color;
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this.mensaje;
  }

  setClase() {
    this.htmlElement.nativeElement.classList.add('form-text')
  }

}
