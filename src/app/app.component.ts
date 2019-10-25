import { Component } from '@angular/core';
import {HttpClient,HttpParams,HttpHeaders} from '@angular/common/http';
import { Post } from './post';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';

  posts: Observable<any>;
  newPost: Observable<any>;

  constructor(private http: HttpClient){}

  getPosts(){
    let headers = new HttpHeaders().set('Authorization', 'auth-token');

    this.posts = this.http.get(this.ROOT_URL + '/posts',{headers})
  }
  
  createPost(){
    const data: Post = {
      id: null,
      userId: 23,
      title: 'My New Post',
      body: 'Hello There'
    }
    this.newPost = this.http.post(this.ROOT_URL + '/posts', data)
    .map(post => post.body)
      
  }
}
