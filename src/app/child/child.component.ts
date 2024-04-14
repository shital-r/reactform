import { Component, EventEmitter, Input,Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
//   @Input()
// productlistfromparent:string[]=[];

// productlistfromchild:string[]=[];
// @Output()
// emitproduct:EventEmitter<any>=new EventEmitter;

// sendproductlist(){
//   this.emitproduct.emit(this.productlistfromchild)
// }
 

@Input()
selectproduct:string='';
addpro:string='';

@Output()
addedProduct:string='';
addproduct:EventEmitter<string>=new EventEmitter;

sendproduct(){
  this.addproduct.emit(this.addedProduct);
}

onAddcart(selproduct:any){
this.selectproduct=selproduct;
}
}
