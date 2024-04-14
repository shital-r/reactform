import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-pan',
  templateUrl: './pan.component.html',
  styleUrls: ['./pan.component.css']
})
export class PANComponent {

  @HostListener("keypress",["$event"])
  allowOnlyNumber(e:any){
    console.log(e.which);
    if(e.which < 48 || e.which > 57){
      e.preventDefault();
    }
  }



}
