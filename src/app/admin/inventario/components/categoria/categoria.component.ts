import { Component, inject } from '@angular/core';
import { CategoriaService } from '../../services/categoria.service';
import { FormControl, FormGroup } from '@angular/forms';
import swal from 'sweetalert2'
import Swal from 'sweetalert2';

interface Categoria{
  id?: number,
  nombre: string,
  detalle:string
}

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.scss'
})
export class CategoriaComponent {
  private categoriaService=inject(CategoriaService)
  categorias:Categoria[]=[]
  dialog_visible: boolean=false
  categoria_id:number=-1;
  
  categoriaForm=new FormGroup({
    nombre:new FormControl(''),
    detalle: new FormControl('')
  })
  ngOnInit():void{
    this.getCategorias()
  }
  getCategorias(){
    this.categoriaService.funListar().subscribe(
      (res:any)=>{
        this.categorias=res;
      },
      (error:any)=>{
        console.log(error)
      }
    )
  }
  mostrarDialogo(){
    this.dialog_visible=true
  }

  guardarCategoria(){
    if(this.categoria_id>0){     
    this.categoriaService.funGuardar(this.categoriaForm.value).subscribe(
      (res:any)=>{
        this.dialog_visible=false;
        this.getCategorias();
        this.categoria_id=-1;
        this.alerta("ACTUALIZADO", "La categoria se modifico con exito!", "success")

      },
      (error:any)=>{
        this.alerta("ERROR AL ACTUALIZAR", "Verifica los datos!", "error")
      }
    );
    this.categoriaForm.reset();
  }
  else{
    this.categoriaService.funGuardar(this.categoriaForm.value).subscribe(
      (res:any)=>{
        this.dialog_visible=false;
        this.getCategorias();
      },
      (error:any)=>{
        console.log(error);
      }


    )
  }
this.categoriaForm.reset();
}
  editarCategoria(cat:Categoria){
    this.dialog_visible=true
    this.categoria_id
    this.categoriaForm.setValue({nombre: cat.nombre, detalle: cat.detalle})
  }
  eliminarCategoria(cat:Categoria){
    Swal.fire({
      title: "¿Está seguro de eliminar la categoría?",
      text: "Una vez eliminado no se podrá recuperar!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí, eliminar!"
  }).then((result) => {
      if (result.isConfirmed) {
          this.categoriaService.funEliminar(this.categoria_id).subscribe(
              (res:any)=>{
                  
                  this.alerta("ELIMINANDO!","Categoria eliminada","success")
                  
                  this.getCategorias();
                  this.categoria_id=-1
              },
              (error:any)=>{
                  
                      this.alerta("ERROR!", "Error al intentar eliminar", "error")
                  
              }
            )

          }
        });
      }
      
      alerta(title:string, text:string, icon:'success'|'error'|'info'|'question'){
        Swal.fire({
          title: title,
          text:text,
          icon:icon
        });
      }
    }
  