import { Component, OnInit } from '@angular/core';
import { ServiceService } from "src/app/shared/service.service";
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(public service: ServiceService) { }

  ngOnInit() {
  }

  departments = [
    { id: 1, value: "IT" },
    { id: 2, value: "Finance" },
    { id: 3, value: "HR" },
  ]

  // Clear the form
  onClear() {
    this.service.form.reset();
    this.service.initializedFormGroup(); // define in service component
  }

}
