import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  url="http://localhost:3000/item";
  url1="http://localhost:3000/carts";

  constructor(private http:HttpClient) { }

  getAllItems(){
    return this.http.get(this.url);
  }
  getCartItems(){
    return this.http.get(this.url1);
  }
  display(id:any){
    return this.http.get('http://localhost:3000/item/'+id);
  }

  cardData(data:any){
    return this.http.post(this.url1,data).subscribe();
  }

  delete(id:any){
    this.http.delete(this.url1+"/"+id).subscribe();        
    }
  


}
