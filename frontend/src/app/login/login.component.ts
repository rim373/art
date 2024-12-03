import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginObj:any={
    "EmailId": "",
    "Password": ""
  };

  http = inject(HttpClient);

  constructor(private router:Router){

  }

  onLogin(){
    debugger;
    this.http.post("https://freeapi.miniprojectideas.com/api/User/Login",this.loginObj).subscribe((res:any)=>{
      debugger;
      if(res.result){
        alert("Login Success");
        localStorage.setItem("angular18Login",this.loginObj.User) ;
        this.router.navigateByUrl("profile")
      }else{
        alert("check User or Password")
      }
    })
  }
}
