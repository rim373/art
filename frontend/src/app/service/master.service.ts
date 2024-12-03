import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  apiUrl: string='http://127.0.0.1:8000/docs'
  constructor(private http:HttpClient) { }
  getAllEvent(){
    return this.http.get(this.apiUrl + "" )
    
  }
}
