import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  productobj : product = new product();

  @Output()
  emitproductdata:EventEmitter<product> = new EventEmitter();

  createproductdata(){
console.log(this.productobj);
this.emitproductdata.emit(this.productobj)
  }

  resetdata(){
    this.productobj= new product();
  }

}

class product{
  productname!: string;
  quantity!:number;
  price!:number;
  }