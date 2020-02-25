import { Component, OnInit } from '@angular/core';
import { BlogPostService } from '../blog-post.service';
import{blogpost} from '../models/blogPost'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog-post-list',
  templateUrl: './blog-post-list.component.html',
  styleUrls: ['./blog-post-list.component.css']
})
export class BlogPostListComponent implements OnInit {
 //blogList:blogpost[];
 id:string
 blogList$:Observable<blogpost[]>; // observable  sorte de push des information donc  il faut un pipe async dans le html
  constructor(private blogListService:BlogPostService) { }

  ngOnInit(): void {
    this.BlogList();
  }
 BlogList(){
   /*this.blogListService.getBlogList().subscribe(res=>{
    this.blogList$=res
   })*/
   this.blogList$=this.blogListService.getBlogList();
   // console.log(JSON.stringify(this.blogList$))
 }
 
}
