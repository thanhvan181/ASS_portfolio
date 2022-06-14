import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAuth } from 'src/app/Models/auth';
import { AuthenService } from 'src/app/Services/authen.service';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  public signupForm !: FormGroup;

  auth: IAuth = {
    name: "",
    email: "", 
    password: ""

  }

  constructor( private AuthenService : AuthenService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private FormBuilder: FormBuilder,

    
    
    ) {
    
   }

  ngOnInit(): void {
    this.signupForm = this.FormBuilder.group({
      name: [''],
      email: [''],
      password: [''],

    })
  }
  onSubmit(){
    this.AuthenService.signup(this.signupForm.value).subscribe(data => {
      // chuyển hướng router
      alert("dang ky thanh cong");
      this.signupForm.reset()
      this.router.navigateByUrl('/');
    })
  }

}
