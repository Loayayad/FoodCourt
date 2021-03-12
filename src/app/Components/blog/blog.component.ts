import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/Services/blog.service';
import { IComment } from 'src/app/ViewModels/icomment';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  addComment:IComment = {
    // id:0,
    date:new Date(),
    comment:''
  };
  //  loginFrm:FormGroup;
   AllPosts: any[]=[];
   AllComments:any[]=[];
   BlogItems: any;
  constructor(builder: FormBuilder,private router: Router ,private blog:BlogService) {
  //  this.loginFrm=builder.group({
  //     Name:['',[Validators.required,Validators.minLength(3)]],
  //     Email:['',[Validators.required,Validators.email]],
  //     Phone:['',[Validators.required,Validators.pattern('^01[0-2]{1}[0-9]{8}')]],
  //     comment:['']
  //   })
   }
  //  get Name(){
  //   return this.loginFrm.get('Name');
  // }
 
  // get Email(){
  //   return this.loginFrm.get('Email');
  // }
  
  onSubmit() {
    
      this.blog.addComment(this.addComment);
      this.addComment.comment='';
  
  }
  ngOnInit(): void {
   this.getBlogItems();
    this.getAllPosts();
   this.getAllComments();
   
  }

  getBlogItems(){
    this.blog.getBlogItems().subscribe(
      (res)=>{
        this.BlogItems=res.payload.data();
      },(err)=>{
        console.log(err);
      }
    )
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
