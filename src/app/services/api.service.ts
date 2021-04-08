import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = environment.baseApiUrl;

  constructor(private http: HttpService) { }

  get(){
    return this.http.get(this.baseUrl + 'ticket-replies')
  }

  post(payload: any){
    return this.http.post(this.baseUrl +  'ticket-replies', payload)
  }

  put(id: any, payload: any){
    return this.http.put(this.baseUrl +  'ticket-replies' + '/' + id, payload)
  }

  deleteTicket(id: any){
    return this.http.delete(this.baseUrl + 'ticket-replies' + "/" + id)
  }
  
}
