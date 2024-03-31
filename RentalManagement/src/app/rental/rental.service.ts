import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  url = "http://localhost:8080/rentals";
  
  constructor(private httpClient : HttpClient) { }
  public getData(){
    return this.httpClient.get(this.url);
  }
}
