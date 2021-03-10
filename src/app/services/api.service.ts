import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

const baseURL = '172.20.34.75/canalette-backend';

@Injectable({  providedIn: 'root'})

export class ApiService {
  constructor(private httpClient: HttpClient) { }

  /* getOptions() {
    let headers = new HttpHeaders;
    if (this.auth.jwtoken) {
      headers = headers.append('Authorization','Bearer${this.auth.jwToken}');)
    }
    return {headers};
  }
 */

  /* USER */
  userReadAll(): Observable<any> {
    return this.httpClient.get(baseURL+"/users/");
  }

  /* userRead(id): Observable<any> {
    return this.httpClient.get(`${baseURL}+"/users/view/"${id}`);
  }

  create(data): Observable<any> {
    return this.httpClient.post(baseURL, data);
  }

  update(id, data): Observable<any> {
    return this.httpClient.put(`${baseURL}/${id}`, data);
  }

  delete(id): Observable<any> {
    return this.httpClient.delete(`${baseURL}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.httpClient.delete(baseURL);
  }

  searchByName(name): Observable<any> {
    return this.httpClient.get(`${baseURL}?name=${name}`);
  } */
}
