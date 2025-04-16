import { Component } from '@angular/core';
//import { CalculadoraComponent } from './calculadora/calculadora.component'
import { ListaComprasComponent } from "./lista-compras/lista-compras.component"
@Component({
  selector: 'app-root',
  //Importando aqui o HelloWorld ele já fica disponivel para funcionar dentro do meu html.
  imports: [ListaComprasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularProject';
}
