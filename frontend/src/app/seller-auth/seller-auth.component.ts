import { Component,inject,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router,RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-seller-auth',
  standalone: true,
  imports: [FormsModule,RouterLink,RouterLinkActive],
  templateUrl: './seller-auth.component.html',
  styleUrl: './seller-auth.component.css'
})
export class SellerAuthComponent implements OnInit {
  sellerAuthObj:any={
    "userId": 0,
    "firstName": "",
    "middleName": "",
    "lastName": "",
    "mobileNo": "",
    "emailId": "",
    "altMobileNo": "",
    "password": ""
  };
  http = inject(HttpClient);
  constructor(private router:Router){

  }
  onSign(){
    debugger;
    this.http.post("https://freeapi.miniprojectideas.com/api/User/CreateNewUser",this.sellerAuthObj).subscribe((res:any)=>{
      debugger;
      if(res.result){
        alert("Signin Success");
        localStorage.setItem("angular18Login",this.sellerAuthObj.User) ;
        this.router.navigateByUrl("profile")
      }else{
        alert("There is messing data")
      }
    })
  }
  
  
  ngOnInit(): void {
    
  }
  
  

}
