import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  @Input() color: string = 'red';
  @Input() mensaje: string = 'Debe ingresar este campo';

  htmlElement: ElementRef<HTMLElement>;

  constructor(private element: ElementRef<HTMLElement>) {
    this.htmlElement = element;
  }

  ngOnChanges(changes: SimpleChanges): void {


    if (changes['mensaje']) {
      const mensaje = changes['mensaje'].currentValue;
      this.htmlElement.nativeElement.innerText = mensaje;
    }

    if (changes['color']) {
      const color = changes['color'].currentValue;
      this.htmlElement.nativeElement.style.color = color;
    }

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
