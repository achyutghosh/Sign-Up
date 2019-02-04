import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl("", Validators.required),
    email: new FormControl("", Validators.email),
    mobile: new FormControl("", [
      Validators.required,
      Validators.minLength(10)
    ]),
    address: new FormControl(""),
    gender: new FormControl("1"),
    department: new FormControl(0),
    dob: new FormControl(""),
    isAccept: new FormControl(false),
  });

  initializedFormGroup() {
    this.form.setValue({
      $key: null,
      fullName: "",
      email: "",
      mobile: "",
      address: "",
      gender: "1",
      department: 0,
      dob: "",
      isAccept: false
    });
  }
}
