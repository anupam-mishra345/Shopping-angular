import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  url="http://localhost:3000/item";

  constructor(private http:HttpClient) { }

  getAllItems(){
    return this.http.get(this.url);
  }

  display(id:any){
    return this.http.get('http://localhost:3000/item/'+id);
  }

}
