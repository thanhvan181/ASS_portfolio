import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAuth } from 'src/app/Models/auth';
import { AuthenService } from 'src/app/Services/authen.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'cc',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  public loginForm !: FormGroup

  constructor( private AuthenService : AuthenService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private FormBuilder: FormBuilder,
    
    
    ) {
    
   }

  ngOnInit(): void {
    this.loginForm = this.FormBuilder.group({
      email: ['', [Validators.required]],
      password: ['']
    })
  }
  login(formAuth:any) {
    console.log(formAuth.value);
    
    this.AuthenService.signin(formAuth.value).subscribe((data)=> {
      localStorage.setItem("user", JSON.stringify(data)
      )
      if(localStorage.getItem("user")){
        const user= JSON.parse(localStorage.getItem("user") as any);
        if(user.user.id === 1) {
          this.router.navigateByUrl("/admin")
          alert("xin chao admmin");

        }
        else{
          this.router.navigateByUrl("/")
          alert("dang nhap thanh cong");
        }
      }
     

    
    })
   

  }
  


}
