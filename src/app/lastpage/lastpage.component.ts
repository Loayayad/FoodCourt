import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lastpage',
  templateUrl: './lastpage.component.html',
  styleUrls: ['./lastpage.component.scss']
})
export class LastpageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    // if(localStorage.getItem('orderSent')){
    //   localStorage.removeItem('orderSent');
    //   window.location.reload();
    // }
    
  }
  refresh(){
    
    this.router.navigate(['/Home']);
  }
}
