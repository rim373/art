import { Component,inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router} from '@angular/router';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactObj:any={
  "Content": "",
  "Organiser": "",
  "Date": "",
  "Flyer": ""
  };

  http = inject(HttpClient);

  constructor(private router:Router){

  }

  onContact(){
    debugger;
    this.http.post("http://127.0.0.1:8000/Event",this.contactObj).subscribe((res:any)=>{
      debugger;
      if(res.result){
        alert("Send Successeful");
        localStorage.setItem("angular18",this.contactObj.User) ;
        this.router.navigateByUrl("contact")
      }else{
        alert("ther is false data type")
      }
    })
  }

}
