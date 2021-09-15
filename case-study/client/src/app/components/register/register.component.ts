import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public myForm: FormGroup;
  public successMessage = "";
  constructor(private _registerservice:RegisterService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) {
    this.myForm = new FormGroup({
      email: new FormControl(null, Validators.email),
      username: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      cnfpass: new FormControl(null, this.passValidator)
    })


    this.myForm.controls.password.valueChanges
      .subscribe(
        x => this.myForm.controls.cnfpass.updateValueAndValidity()
      );
   }

  ngOnInit(): void {
   
  }

  // isValid(formcontrolName) {
  //   return this.myForm.get('formcontrolName').invalid && this.myForm.get('formcontrolName').touched;
  // }

  passValidator(control: AbstractControl) {
    if (control && (control.value !== null || control.value !== undefined)) {
      const cnfpassValue = control.value;

      const passControl = control.root.get('password');
      if (passControl) {
        const passValue = passControl.value;
        if (passValue !== cnfpassValue || passValue === '') {
          return {
            isError: true
          };
        }
      }
    }

    return null;
  }

  register(){
    console.log(this.myForm.value);

    if(this.myForm.valid){
    this._router.navigate(['../home'], { relativeTo: this._activatedRoute });
    this._registerservice.submitRegister(this.myForm.value)
    .subscribe(
      data => this.successMessage = "Successfully Registered",
      error => this.successMessage = "Error",
      
    )
    }
  }

  movetologin() {
    this._router.navigate(['../login'], { relativeTo: this._activatedRoute });
  }

}
