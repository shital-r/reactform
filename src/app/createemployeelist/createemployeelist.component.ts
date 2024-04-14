import { Component, EventEmitter, Input, Output, } from '@angular/core';

@Component({
  selector: 'app-createemployeelist',
  templateUrl: './createemployeelist.component.html',
  styleUrls: ['./createemployeelist.component.css']
})
export class CreateemployeelistComponent {

  selectdesig: string = '';

  @Input()
  acount: any;
  @Input()
  jcount: any;
  @Input()
  empcount: any;


  @Output()
  emitradio: EventEmitter<string> = new EventEmitter();

  onselect() {
    this.emitradio.emit(this.selectdesig);
  }





}

class employee {
  empname!: string;
  designation!: string;
  salary!: number;
}
