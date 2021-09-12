import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public myForm: FormGroup;
  public successMessage = "Successfully registered";
  constructor() {
    this.myForm = new FormGroup({
      email: new FormControl(null, Validators.email),
      name: new FormControl(null, Validators.required),
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

}
