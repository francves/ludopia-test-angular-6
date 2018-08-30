import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }

  getPosts(){
  	return new Promise(resolve => {
    this.http.get(this.apiUrl+'/posts').subscribe(data => {
      resolve(data);
      console.log("Ejecutando provider");
    }, err => {
      console.log(err);
    });
  });
  }

}
