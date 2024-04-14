import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  productlist: any[] = [];

  getCreateProductdata(data:any){
    this.productlist.push(data);

  }

}
