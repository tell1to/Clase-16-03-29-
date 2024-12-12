import { Component } from '@angular/core';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrl: './producto.component.scss'
})
export class ProductoComponent {
  products:any[]=[{id:1, nombre:"teclado", precio: 1, categoria_id: 1,},
    {id:1, nombre:"teclado", precio: 1, categoria_id: 1,},
    {id:1, nombre:"teclado", precio: 1, categoria_id: 1,},
    {id:1, nombre:"teclado", precio: 1, categoria_id: 1,},
    {id:1, nombre:"teclado", precio: 1, categoria_id: 1,},
    {id:1, nombre:"teclado", precio: 1, categoria_id: 1,},
    {id:1, nombre:"teclado", precio: 1, categoria_id: 1,},
    {id:1, nombre:"teclado", precio: 1, categoria_id: 1,},
    {id:1, nombre:"teclado", precio: 1, categoria_id: 1,},
    {id:1, nombre:"teclado", precio: 1, categoria_id: 1,},
    {id:1, nombre:"teclado", precio: 1, categoria_id: 1,},
    {id:1, nombre:"teclado", precio: 1, categoria_id: 1,},
    {id:1, nombre:"teclado", precio: 1, categoria_id: 1,},{id:1, nombre:"teclado", precio: 1, categoria_id: 1,},
    {id:1, nombre:"teclado", precio: 1, categoria_id: 1,},
    {id:1, nombre:"teclado", precio: 1, categoria_id: 1,},{id:1, nombre:"teclado", precio: 1, categoria_id: 1,},
    {id:1, nombre:"teclado", precio: 1, categoria_id: 1,},{id:1, nombre:"teclado", precio: 1, categoria_id: 1,},
    {id:1, nombre:"teclado", precio: 1, categoria_id: 1,},
    {id:1, nombre:"teclado", precio: 1, categoria_id: 1,}
  ];
  cols:any[]=[];
  openNew(){

  }
  
  editProduct(prod:any){

  }
  deleteProduct(prod:any){
    
  }

}
