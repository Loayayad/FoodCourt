import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.scss']
})
export class CreateProfileComponent implements OnInit {
  profileForm:any;
  address:any;
  mobilePattern="^((\\+20-?)|0)?[0-9]{10}$";
  Username:string|null="user1";

  constructor(
    private firebaseProfile: AuthService,
    private route: Router
  ) {}


  ngOnInit(): void {

    //this.getUsername();
    this.Username = localStorage.getItem('username');

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

  get street() { return this.profileForm.get('street'); }


  async onSubmit() {

  console.log(this.profileForm.value)
   await this.firebaseProfile.profile(this.profileForm.value)
   .then(()=>{
    this.route.navigate(['/Home']);
   }).catch((err)=>{
     console.log(err)
   })

  }


}