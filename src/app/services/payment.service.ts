import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class PaymentService {
  constructor(private http: HttpClient) { }
	base = environment.apiString;
  // for posting details of credit card on server
  postDetails(data) { 
    return this.http.post(this.base+'/api/carddetails',data)
  }
}
