import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.scss']
})
export class CreateProfileComponent implements OnInit {
  profileForm:any;
  mobilePattern="^((\\+20-?)|0)?[0-9]{10}$";

  constructor() {}


  ngOnInit(): void {
    this.profileForm = new FormGroup({
      firstName: new FormControl('', [Validators.required,Validators.minLength(4)]),
      lastName: new FormControl('', [Validators.required,Validators.minLength(4)]),
      phoneNumber: new FormControl('', [Validators.required,Validators.pattern(this.mobilePattern)]),
      address: new FormGroup({
        street: new FormControl('', Validators.required),
        governate: new FormControl('', Validators.required),
        country: new FormControl('', Validators.required)

      })
    });

  }
  get firstName() { return this.profileForm.get('firstName'); }
  get lastName() { return this.profileForm.get('lastName'); }

  get phoneNumber() { return this.profileForm.get('phoneNumber'); }

  // get street() { return this.profileForm.adress.get('street'); }


  onSubmit() {

    console.warn(this.profileForm.value);
  }


}
