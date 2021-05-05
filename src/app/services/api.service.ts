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


  /* findSingleUser(cf:any) {
    return this.httpClient.get(`${baseURL}/user/view/${cf}`)
  } */
  findSingleUser(cf:any) {
    return this.httpClient.get(`${baseURL}/user/view/${cf}`)
  }

  createUser(data:any): Observable<any> {
    console.log(data);
    return this.httpClient.post(`${baseURL}/user/create`, data);
  }
/*
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
  findJoinedDrain(num:any) {
    return this.httpClient.get(`${baseURL}/drain/joined/${num}`);
  }  // find all records of specific drain. search by drain number, not ID
  findSingleDrain(num:any) {
    return this.httpClient.get(`${baseURL}/drain/view/${num}`);
  }  // find all records of specific drain. search by drain number, not ID

  createDrain(data:any): Observable<any> {
    console.log(data);
    return this.httpClient.post(`${baseURL}/drain/create`, data);
  }

  deleteDrain(id:any): Observable<any> {
    return this.httpClient.delete(`${baseURL}/drain/delete/${id}`);
  }

  /* YEAR */
  findSingleYear(year:any): Observable<any> {
    return this.httpClient.get(`${baseURL}/tax/joined/${year}`);
  }
  findJoinedYear(num:any) {
    return this.httpClient.get(`${baseURL}/tax/joined/${num}`);
  }  // find all records of specific drain. search by drain number, not ID

  createYear(data:any): Observable<any> {
    //console.log(data);
    return this.httpClient.post(`${baseURL}/tax/create`, data);
  }




  /* DELETE ELEMENT AND JOINED TABLE */
  createRelational(data:any): Observable<any> {
    console.log(data);
    return this.httpClient.post(`${baseURL}/relational/create`, data);
  }
  deleteRelational(id:any): Observable<any> {
    return this.httpClient.delete(`${baseURL}/relational/delete/${id}`);
  }
  findSingleRelational(id:any): Observable<any> {
    return this.httpClient.get(`${baseURL}/relational/view/${id}`);
  }

}
