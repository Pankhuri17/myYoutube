import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }
  get(url: string) {
    return this.http.get(url);
  }
  post(url: string, payload: any) {
    return this.http.post(url, payload);
  }
  put(id: any, payload: any) {
    return this.http.put(id, payload);
  }
  delete(id: any) {
    return this.http.delete(id);
  }

}
