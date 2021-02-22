import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  lang:any;
  constructor() { }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'en';
  }

  changeLang(event: any){
    console.log(event.target.value);
    localStorage.setItem('lang',event.target.value);
    window.location.reload();
  }

}
