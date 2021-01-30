import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
   loginFrm:FormGroup;
  constructor(private fb:FormBuilder) {
   this.loginFrm=this.fb.group({
      fName:['',[Validators.required]],
      lName:['',[Validators.required]],
      Email:['',[Validators.required]],
      Phone:['',[Validators.required]],
    })
   }
 
  ngOnInit(): void {
  }
  

}
