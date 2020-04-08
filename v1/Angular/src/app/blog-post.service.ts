import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {blogpost} from './models/blogPost'
import { Observable, Subject } from 'rxjs';
import { User } from './models/user';
@Injectable({
  providedIn: 'root' // pas besoin de le declarer dans appModule
})
export class BlogPostService {
  baseUrl = 'http://localhost:3000/api/v1/block-posts/';
  baseUrlUser = 'http://localhost:3000/';
  authenticate(user:User){
    return this.httpClient.post(this.baseUrlUser+'login',user);
  }
   registration(user:User){
     return this.httpClient.post(this.baseUrlUser+'register',user);
   }
   post:blogpost;
   private BblocPostCreated= new Subject<string>()
  constructor( private httpClient:HttpClient) { }
  dispatchBlocPost(id:string){ //--->
    this.BblocPostCreated.next(id);
  }
  handleBlocPostCreate(){
   return  this.BblocPostCreated.asObservable();    ///return le resilt de subject
  }
  uploadFile(formData:FormData){
    return this.httpClient.post<any>(`${this.baseUrl}upload`,formData);
  }

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
    AddBloc(post:blogpost){
      return this.httpClient.post<blogpost>(this.baseUrl,post)
    };
    EditBloc(id: string,blogpost:blogpost){
       return this.httpClient.put(this.baseUrl+'update/'+id,blogpost) };
    
 
  
}
