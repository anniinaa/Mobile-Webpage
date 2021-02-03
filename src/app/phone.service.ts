import { Phone } from './phones';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class PhoneService{

    url = '/assets/data/phones.json';

    constructor(private http:HttpClient) { }
    
  getPhones(): Observable<Phone[]>{
    return this.http.get<Phone[]>(this.url);
  }

  getPhone(phoneId: String): any{
    return this.http.get(`/assets/data/${phoneId}.json`);
  }

}
  