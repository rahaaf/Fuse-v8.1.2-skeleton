import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contentus',
  templateUrl: './contentus.component.html',
  styleUrls: ['./contentus.component.scss']
})
export class ContentusComponent implements OnInit {

  email = new FormControl("", [Validators.required, Validators.email]);

  constructor() { }

  ngOnInit(): void {
  }

  getErrorMessage() {
    if (this.email.hasError("required")) {
        return "You must enter a value";
    }

    return this.email.hasError("email") ? "Not a valid email" : "";
}

}
