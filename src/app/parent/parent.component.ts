import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
// productlist:string[]=[];

// receiveddata:string=''
// getproductlist(data:any){
//   this.receiveddata=data;
// }

selectedproduct:string='';
@Input()
addPro:string='';

onSelectproduct(product:any){
  this.selectedproduct=product;
}

productFromchild:string='';

getproduct(data:any){
  this.productFromchild=data;
}



}
