import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnrolleeService {

  constructor(private http: HttpClient) { }

  // get the list of enrollees by calling /enrollees endpoint
  getEnrollees() {
    return this.http.get(environment.apiUrl + '/enrollees');
  }

  // update a prticular enrollee by executing a PUT on /enrollees/{id}
  updateEnrollee(id: string, active: boolean, name: string, dateOfBirth: string) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let body = {
      "active": active,
      "name": name,
      "dateOfBirth": dateOfBirth,
    }

    return this.http
      .put(environment.apiUrl + '/enrollees/' + id, body);
  }
}
