//Biblioteca para usar o if e for em html
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
//Biblioteca para pegar valores de formulários html.
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule, CommonModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {

  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  calcularResultado(){
    this.resultado = this.numero1 + this.numero2;
  }
}
