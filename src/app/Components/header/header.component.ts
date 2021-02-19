import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() isLogout = new EventEmitter<void>()
  constructor(
    private firebaselogout: AuthService,
    private route: Router
    ) { }

  ngOnInit(): void {
  }
  
  logout(){
    this.firebaselogout.logout()
    this.isLogout.emit()
    this.route.navigate(['/LogIn'])
  }

}
