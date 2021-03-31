import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  product_id:number;
  data:any;
  dataNew:any;
  size:any='';
  img:any;
  cmnt:any;

  constructor(private actRoute: ActivatedRoute,private commonService:CommonService, private router:Router) {
    this.product_id=this.actRoute.snapshot.params.id;
   }

  ngOnInit(): void {

    let p_id=parseInt(this.actRoute.snapshot.params.id);
    this.product_id=p_id;
    this.display();

  }

display(){
  this.commonService.display(this.product_id).subscribe((resp)=>{
    this.data=resp;
    this.img=this.data.images;
    this.cmnt=this.data.comments;
    console.log(this.data);
    this.commonService.getCartItems().subscribe(resp=>{
      this.dataNew=resp;
    });
  })  
}

imageChange(path:any){
  var elem:HTMLImageElement=document.getElementById("img1") as HTMLImageElement;
  elem.src=path;
  console.log(path);
}

myCart(cart:any){

  if(this.size==''){
    alert("Please select size")
  }
  else{
  let data1={
    item_id: cart.id,
    item_name: cart.name,
    item_price: cart.price,
    item_color: cart.color,
    item_brand: cart.brand,
    item_image: cart.images[0],
    item_qnty: 1,
    item_size:this.size
    }


    let k=0;
    console.log(this.dataNew);
    
    for(let i of this.dataNew){
          // console.log("inside for loop");
      if(i.item_id===cart.id && i.item_size===this.size){
        k+=1;
      }
    }
  
    if(k===0){
      this.commonService.cardData(data1);
    }
    this.router.navigate(['/cart']);
    
}
}
}
