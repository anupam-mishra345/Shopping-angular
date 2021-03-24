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

  img:any;
  cmnt:any;

  constructor(private actRoute: ActivatedRoute,private commonsService:CommonService, private router:Router) {
    this.product_id=this.actRoute.snapshot.params.id;
   }



  ngOnInit(): void {

    let p_id=parseInt(this.actRoute.snapshot.params.id);
    this.product_id=p_id;
    this.display();

  }


display(){
  this.commonsService.display(this.product_id).subscribe((resp)=>{
    this.data=resp;
    this.img=this.data.images;
    this.cmnt=this.data.comments;
    console.log(this.data);
  })  
}

imageChange(path:any){
  var elem:HTMLImageElement=document.getElementById("img1") as HTMLImageElement;
  elem.src=path;
  console.log(path);
}


myCart(data:any){
  this.router.navigate(['/cart'])
}
}
