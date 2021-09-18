import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  constructor(private _loginservice:LoginService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) { 
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    })
    
  }

  ngOnInit(): void {
    
  }

  isValid(controlName: string | (string | number)[]) {
    return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched;
  }

  login(){
    console.log(this.loginForm.value);
    
    if(this.loginForm.valid){
    this._loginservice.login(this.loginForm.value)
    .subscribe(
      data => {
        console.log(data);
        localStorage.setItem('token', data.toString());
        this._router.navigate(['../home'])
      },
        error => {

        }      
    )
    }
  }

  movetoregister() {
    this._router.navigate(['../register'], { relativeTo: this._activatedRoute });
  }
}
