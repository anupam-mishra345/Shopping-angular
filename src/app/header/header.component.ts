import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private commonService:CommonService, private router:Router) { }

  ngOnInit(): void {
  }

  listing(){
    this.router.navigate(['/listing']);
  }
  cart(){
    this.router.navigate(['/cart']);
  }

}
