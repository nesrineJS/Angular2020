import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {blogpost} from './models/blogPost'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root' // pas besoin de le declarer dans appModule
})
export class BlogPostService {
  baseUrl = 'http://localhost:3000/api/v1/block-posts/';
  constructor( private httpClient:HttpClient) { }

  getBlogList():Observable<blogpost[]>{
    
    return this.httpClient.get<blogpost[]>(`${this.baseUrl}`)

  }
  getBlogById(id: string):Observable<blogpost>{
return this.httpClient.get<blogpost>(`${this.baseUrl}${id}`)

  }
  deleteBlogById(id: string){
    return this.httpClient.delete(`${this.baseUrl}${id}`)
    
      }
    deleteMultiBlog(ids:string[]){
       const ids$=ids.join(',');
       console.log(`${this.baseUrl}?id$=${ids$}`)
       return this.httpClient.delete(`${this.baseUrl}?id$=${ids$}`);



    }

  
}
