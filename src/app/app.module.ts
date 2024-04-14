import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { CreateemployeelistComponent } from './createemployeelist/createemployeelist.component';
import { ParentMobileRadioComponent } from './parent-mobile-radio/parent-mobile-radio.component';
import { PANComponent } from './pan/pan.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { UserlistComponent } from './userlist/userlist.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    ProductListComponent,
    CreateProductComponent,
    EmployeelistComponent,
    CreateemployeelistComponent,
    ParentMobileRadioComponent,
    PANComponent,
    CreateuserComponent,
    UserlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
