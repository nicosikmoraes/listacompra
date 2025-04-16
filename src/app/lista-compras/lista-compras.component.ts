import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ItemLista } from './itemLista';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-compras',
  imports: [FormsModule, CommonModule],
  templateUrl: './lista-compras.component.html',
  styleUrl: './lista-compras.component.css'
})
export class ListaComprasComponent {
      getItem: string = '';
      lista: ItemLista[] = [];

      addItem(){
        let itemLista = new ItemLista();
        itemLista.nome = this.getItem;
        /* Isso aqui é gênio */
        itemLista.id = this.lista.length + 1;

  this.lista.push(itemLista)

        this.getItem = '';

        console.table(this.lista)
      }

      riscarItem(itemLista: ItemLista){
        /* Esse ! antes da váriavel significa que eu vou receber o oposto de seu valor atual*/
        itemLista.comprado = !itemLista.comprado
      }

      limparLista(){
      this.lista = [];
      }
}
