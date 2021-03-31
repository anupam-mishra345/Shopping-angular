import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  data:any;
  price:any;
  num:any=0;
  bool:boolean=false;

  constructor(private commonService: CommonService, private router: Router) { }

  ngOnInit(): void {
    this.displayCart();
    
  }
  
  cal(){
    this.price=0;
    this.num=0;
    for(let i of this.data){
      this.price+=i.item_price;
      this.num+=1;
    }
    if(this.num==0){
      this.bool=true;
    }
  }
  
  displayCart(){
    
    return this.commonService.getCartItems().subscribe(resp=>{
      this.data=resp;
      this.cal();
      
    })
  }

  removeItem(id:any){
    console.log(id);
    this.commonService.delete(id);
    this.displayCart();
    window.location.reload();
  }

}