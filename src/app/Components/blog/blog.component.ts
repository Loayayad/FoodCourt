import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { BlogService } from 'src/app/Services/blog.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
   loginFrm:FormGroup;
   AllPosts: any[]=[];
   AllComments:any[]=[];
  constructor(private fb:FormBuilder, private blog:BlogService) {
   this.loginFrm=this.fb.group({
      fName:['',[Validators.required,Validators.minLength(3)]],
      lName:['',[Validators.required,Validators.minLength(3)]],
      Email:['',[Validators.required,Validators.email]],
      Phone:['',[Validators.required,Validators.pattern('^01[0-2]{1}[0-9]{8}')]],
    })
   }
   get fName(){
    return this.loginFrm.get('fName');
  }
  get lName(){
    return this.loginFrm.get('lName');
  }
  get Email(){
    return this.loginFrm.get('Email');
  }
  get Phone(){
    return this.loginFrm.get('Phone');
  }
  onSubmit() {
    console.warn(this.loginFrm.value);
  }
  ngOnInit(): void {
   this.getAllPosts();
   this.getAllComments();
  }

  getAllPosts(){
    this.blog.getAllPosts().subscribe(
      (res) =>{
        //console.log(res);
        res.forEach((element)=>{
          //console.log(element.payload.doc.data());
          this.AllPosts.push(element.payload.doc.data())
        })

        this.AllPosts.forEach((element)=>{
          console.log(element);
        })
      },
      (err)=>{
        console.log(err);
      }
    )

  }

  getAllComments(){
    this.blog.getAllComments().subscribe(
      (res) =>{
        //console.log(res);
        res.forEach((element)=>{
          //console.log(element.payload.doc.data());
          this.AllComments.push(element.payload.doc.data())
        })

        this.AllComments.forEach((element)=>{
          console.log(element);
        })
      },
      (err)=>{
        console.log(err);
      }
    )

  }

}
