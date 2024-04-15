import { Component, OnInit } from '@angular/core';
import { LoginDetails } from '../Services/Login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginDetails]
})
export class LoginComponent implements OnInit {














  ngOnInit(): void {
  }
  title = 'UserDetailService';
  lgnuser={"email":"","password":"","value":"true"}
  
  users:{"email":string,"password":string}[]=[]
constructor(private logindetails:LoginDetails,private route:Router
){}

//variable to know the login failed or not
loginReq:boolean=false

//variable to show the error message in html
showErr:boolean=false;

//variable to show the inputs empty or not
showEmpty:boolean=false

//============>        functions  start from here   <=============

//function that checks whether the input details are empty or not
isEmptyFun(email:string,password:string):boolean{
if(email==="" && password===""){
  return true
}
else{
  return false
}

}



//function that will be called when submit button clicked
OnSubmit(){
  console.log(this.lgnuser)

  
//checking the input details are empty or not
if(! this.isEmptyFun(this.lgnuser.email,this.lgnuser.password)){
  
this.showEmpty=true
setTimeout(() => {
  this.showEmpty=false
}, 1000);



  //validating the input details return boolean
  const validdetails=this.logindetails.validateLogin(this.lgnuser.email,this.lgnuser.password)

  if(validdetails){
    this.loginReq=true

    //navigating to home page if login true
  this.route.navigate(['Home'])
  this.showErr=false
  this.showEmpty=false
    
  }
  else{
    this.loginReq=false
    this.showErr=true
    // setTimeout(() => {
    //   this.showEmpty=true
    // }, 1000);
    this.showEmpty=false

  }
  console.log(this.loginReq)

}
else{
  this.showEmpty=true
  this.loginReq=false
}

}



}
