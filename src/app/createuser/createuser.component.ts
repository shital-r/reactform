import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent {

  userForm!:FormGroup;
  selectedUserid:string|null =null;
  cartcounter:any=0;

  // userobj:user= new user();
  userlist:any[]=[];
  username:string='';

  constructor(private fb:FormBuilder, private http:HttpService, private router:Router,private route:ActivatedRoute){
    this.http.subjectname.subscribe(el=>{
      this.username=el;
    })

  }
  
  // @Output()
  // emituserdata:EventEmitter<user> = new EventEmitter();

    

  
  ngOnInit(): void {
    this.createform();
    this.selectedUserid=this.route.snapshot.paramMap.get('id');
    if(this.selectedUserid){
      this.getUserDetails();
    
    }
  }
  createform(){
    this.userForm=this.fb.group({
    //   "username":['',[Validators.required]],
    //   "mobileno":['',[Validators.required]],
    //   "email":['',[Validators.required]],
    //   "gender":['',[Validators.required]]

    // })
    "firstName":new FormControl('',[Validators.required]),
    "lastName":new FormControl('',[Validators.required]),
    "mobileNo":new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    "gender":new FormControl('',[Validators.required]),
    "email":new FormControl('',[Validators.required]),
    "Company":new FormControl('',[Validators.required]),
    "DOB":new FormControl('',[Validators.required]),
    "Password":new FormControl('',[Validators.required]),
    "confirmPassword":new FormControl('',[Validators.required]),

    
   })

  }

  
  submit(){
    console.log(this.userForm.value);
    // this.emituserdata.emit(this.userobj)
    // this.userlist=this.userForm.value;
    this.userlist.push(this.userForm.value)

      }


  reset(){
    this.userForm.reset();
  }
  
  get firstName(){
    // this.signUpForm.get('firstName');
     return this.userForm.controls['firstName'];
    //  return this.userForm.controls["firstName"];

   }
   get lastName(){
    // return this.userForm.get("lastName");
    return this.userForm.controls["lastName"];

  }
       get mobileNo(){
    return this.userForm.controls["mobileNo"];
  }

   get email(){
    return this.userForm.controls["email"];
  }
  get Company(){
    return this.userForm.controls["Company"];
  }

  get DOB(){
    return this.userForm.controls["DOB"];
  }
  get Password(){
    return this.userForm.controls["Password"];
  }
  get confirmPassword(){
    return this.userForm.controls["confirmPassword"];
  }

    updatename(name:any){
      this.http.subjectname.next(name.value);
    
  }
  getUserDetails(){
    const endPoint= "users/"+this.selectedUserid;
    this.http.getDatafromServer(endPoint).subscribe((response:any)=>{
      if(response){
        this.userForm.patchValue(response);
        console.log(response);
      }
    })
  }
    incrementcount(){

++ this.cartcounter;
this.http.incrementcounter(this.cartcounter);
console.log(this.cartcounter);

  }



  delet(index:number){
    this.userlist.splice(index,1);
    
  
  }
  

  
}
// class user{
//   firstName!: string;
//   lastName!:string;
//   mobileNo!:number;
//   email!:string;
//   Company!:string;
//   gender!:string;
//   DOB!:number;
//   password!:string;
//   confirmPassword!:string;
  
//   }