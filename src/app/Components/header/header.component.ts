import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { HeaderService } from 'src/app/Services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  HeaderItems: any;

  @Output() isLogout = new EventEmitter<void>()
  constructor(
    private firebaselogout: AuthService,
    private headerLang: HeaderService,
    private route: Router
    ) { }

  ngOnInit(): void {

    this.getHeaderLang();
  }

  getHeaderLang(){
    this.headerLang.getHeaderLang().subscribe(
      (res)=>{
        
        console.log(res.payload.data());
        this.HeaderItems = res.payload.data();
        console.log(this.HeaderItems.home);
      },(err)=>{
        console.log(err);
      }
    )
  }
  
  logout(){
    this.firebaselogout.logout()
    this.isLogout.emit()
    this.route.navigate(['/LogIn'])
  }

}
