export class LoginDetails{
users=[
    {"email":"upendra@gmail.com","password":"Upendra021@"},
    {"email":"ravi@gmail.com","password":"ravi"},
    {"email":"anand@gmail.com","password":"anand"}

]
validateLogin(email:string,password:string):boolean{
return this.users.some(user=>user.email===email && user.password===password)

}
// AccessToken=false

// LoginAccess(value:boolean):boolean
// {
//     if(value){
//         return true
//         this.AccessToken=true

//     }
//     else{
//         return false
//         this.AccessToken=false
//     }
    
// }


}