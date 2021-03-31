import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
// import { AfterVElementRef } from '@angular/core';


@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  constructor(private commonService:CommonService, private router:Router) { }

  itemList:any;

  listingArray:any;

  ngOnInit(): void {
  this.getData();
  }
  
  landing(card:any){
    this.router.navigate(['/landing',card.id]);
  }
  
  getData(){
    this.commonService.getAllItems().subscribe((resp)=>{this.itemList=resp});
    // console.log(this.itemList);
  }

  applyFilters(){
  
  let brandArray=[];
  let colorArray=[];
  let priceArray=[];
  
  let brandListingArray:any=[];
  let colorListingArray=[];
  let priceListingArray=[];
  
  let mainArray=[];
  
  let b:any=document.getElementsByClassName("brnd");
  for(let x of b){
      if(x.checked){
          brandArray.push(x.value);
      }
  }
  let c:any=document.getElementsByClassName("color");
  for(let x of c){
      if(x.checked){
          colorArray.push(x.value);
      }
  }

  let p:any=document.getElementsByClassName("price");
  for(let x of p){
      if(x.checked){
          priceArray.push(x.value);
      }
  }

  console.log(brandArray);
  console.log(colorArray);
  console.log(priceArray);


  if(brandArray.length!==0){
    for(let j=0;j<this.itemList.length;j++){
      for(let i=0;i<brandArray.length;i++){
            if(brandArray[i]===this.itemList[j].brand){
                brandListingArray.push(this.itemList[j].id);
            }
        }
    }
    console.log(brandListingArray);
}

if(colorArray.length!==0)
{
  for(let j=0;j<this.itemList.length;j++){
        for(let i=0;i<colorArray.length;i++){
           if(colorArray[i]===this.itemList[j].color){
               colorListingArray.push(this.itemList[j].id);
          }
        }
    }
    console.log(colorListingArray);
}

if(priceArray.length!==0){
  for(let j=0;j<this.itemList.length;j++){
        for(let i=0;i<priceArray.length;i++){
            if(priceArray[i]==="p1"){
                if(this.itemList[j].price>=100 && this.itemList[j].price<=499){
                    priceListingArray.push(this.itemList[j].id);
                }
            }
            else if(priceArray[i]==="p2"){
                if(this.itemList[j].price>=500 && this.itemList[j].price<=1499){
                    priceListingArray.push(this.itemList[j].id);
                }
            }
            else if(priceArray[i]==="p3"){
                if(this.itemList[j].price>=1500 && this.itemList[j].price<=2500){
                    priceListingArray.push(this.itemList[j].id);
                }
            }
        }
    }
    console.log(priceListingArray);
}

let temp=0;

    if (brandListingArray.length !== 0 && colorListingArray.length !== 0 && priceListingArray.length!==0) {
        for(let i=0;i<brandListingArray.length;i++){
            for(let j=0;j<colorListingArray.length;j++){
                for(let l=0;l<priceListingArray.length;l++){
                if((brandListingArray[i]==colorListingArray[j])&&(colorListingArray[j]==priceListingArray[l])){
                    for(let k=0;k<mainArray.length;k++){
                        if(mainArray[k]===brandListingArray[i]){
                            temp++;
                        }
                    }
                    if(temp===0){
                        mainArray.push(brandListingArray[i]);
                    }
                }
            }
        }
        }
    }
    else if (brandListingArray.length !== 0 && colorListingArray.length !== 0) {
        for(let i=0;i<brandListingArray.length;i++){
            for(let j=0;j<colorListingArray.length;j++){
                if(brandListingArray[i]==colorListingArray[j]){
                    for(let k=0;k<mainArray.length;k++){
                        if(mainArray[k]===brandListingArray[i]){
                            temp++;
                        }
                    }
                    if(temp===0){
                        mainArray.push(brandListingArray[i]);
                    }
                }
            }
        }
    }
    else if (brandListingArray.length !== 0 && priceListingArray.length !== 0) {
        for(let i=0;i<brandListingArray.length;i++){
            for(let j=0;j<priceListingArray.length;j++){
                if(brandListingArray[i]==priceListingArray[j]){
                    for(let k=0;k<mainArray.length;k++){
                        if(mainArray[k]===brandListingArray[i]){
                            temp++;
                        }
                    }
                    if(temp===0){
                        mainArray.push(brandListingArray[i]);
                    }
                }
            }
        }
    }
    else if (priceListingArray.length !== 0 && colorListingArray.length !== 0) {
        for(let i=0;i<priceListingArray.length;i++){
            for(let j=0;j<colorListingArray.length;j++){
                if(priceListingArray[i]==colorListingArray[j]){
                    for(let k=0;k<mainArray.length;k++){
                        if(mainArray[k]===priceListingArray[i]){
                            temp++;
                        }
                    }
                    if(temp===0){
                        mainArray.push(priceListingArray[i]);
                    }
                }
            }
        }
    }
    else if(brandListingArray.length!==0){
        for(let i=0;i<brandListingArray.length;i++){
            mainArray.push(brandListingArray[i]);
        }
    }
    else if(colorListingArray.length!==0){
        for(let i=0;i<colorListingArray.length;i++){
            mainArray.push(colorListingArray[i]);
        }
    }
    else if(priceListingArray.length!==0){
        for(let i=0;i<priceListingArray.length;i++){
            mainArray.push(priceListingArray[i]);
        }
    }

    console.log(mainArray);

    for(let i=0;i<mainArray.length;i++){

      this.commonService.display(mainArray[i]).subscribe((resp)=>{
        this.itemList=resp;
        console.log(resp);
      })
  }

// let main:any=document.getElementById("mainId");
// main.innerMain="";




}



}