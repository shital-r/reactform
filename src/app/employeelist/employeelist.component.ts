import { Component } from '@angular/core';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent {

  selectvalue: string = '';
  Acount: any;
  Jcount: any;
  allempcount: any;

  employeelist: employee[] = [];
  filtertable: employee[] = [];

  getdataFromChild(data: any) {
    this.selectvalue = data;

    // if (this.selectvalue == "Angular Developer") {
    //   this.filtertable = this.employeelist.filter((e: any) => { return e.designation == "Angular Developer" });

    //   this.Acount = this.filtertable.length;

    // }
    // else if (this.selectvalue == "Java Developer") {
    //   this.filtertable = this.employeelist.filter((e: any) => e.designation == "Java Developer");
    //   console.log(this.filtertable);
    //   this.Jcount = this.filtertable.length;
    // }
    // else (this.filtertable = this.employeelist)
    // this.allempcount = this.filtertable.length;

    switch (data) {

      case "all":
        this.filtertable = this.employeelist;
        this.allempcount=this.filtertable.length;
        break;

      case "Angular Developer":
        this.filtertable = this.employeelist.filter((e: any) => e.designation == "Angular Developer")
        this.Acount=this.filtertable.length;
        break;

      case "Java Developer":
        this.filtertable = this.employeelist.filter((e: any) => e.designation == "Java Developer");
        this.Jcount=this.filtertable.length;
        break;
    }




  }

  constructor() {
    this.cretaeemployeedata();
    this.filtertable = this.employeelist;
  }
  cretaeemployeedata() {

    var emp1 = new employee("Shital", "Angular Developer", 50000);
    var emp2 = new employee("Shubham", "Angular Developer", 60000);
    var emp3 = new employee("Kiran", "Java Developer", 35000);
    var emp4 = new employee("Komal", "Java Developer", 39000);
    var emp5 = new employee("Priyanka", "Angular Developer", 50000);

    this.employeelist.push(emp1, emp2, emp3, emp4, emp5);
    console.log(this.employeelist)
  }


}

class employee {
  empname!: string;
  designation!: string;
  salary!: number;

  constructor(emp_name: string, designation: string, salary: number) {
    this.empname = emp_name;
    this.designation = designation;
    this.salary = salary;
  }
}