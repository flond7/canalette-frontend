import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';

const baseURL = 'http://172.20.34.75/canalette-backend';

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

  /* SEARCHBAR */
  // category must be 
  searchInCategory(element: any, category: any) {
    //search in users where cf === el
    return {"element": element, "category": category}
  }

  /* USER */
  userReadAll(): Observable<any> {
    return this.httpClient.get(baseURL+"/user/");
  }

  /* findSingleUser(cf:any): Observable<any> {
    return this.httpClient.get(`${baseURL}/users/view/${cf}`);
  } */


  findSingleUser(cf:any) {
    return this.httpClient.get(`${baseURL}/user/view/${cf}`)
  }
/*
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


  /* DRAIN */
  findSingleDrain(num:any) {
    return this.httpClient.get(`${baseURL}/drain/joined/${num}`);
  }  // find all records of specific drain. search by drain number, not ID

  /* YEAR */
  findSingleYear(cf:any): Observable<any> {
    return this.httpClient.get(`${baseURL}/year/view/${cf}`);
  }
}
