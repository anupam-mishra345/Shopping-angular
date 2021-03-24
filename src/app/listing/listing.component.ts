import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  constructor(private commonService:CommonService, private router:Router) { }

  itemList:any;


  ngOnInit(): void {
    this.commonService.getAllItems().subscribe((resp)=>{this.itemList=resp})
    console.log(this.itemList)
  }

landing(card:any){
  this.router.navigate(['/landing',card.id]);
}


}
