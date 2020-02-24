import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BlogPostService } from '../blog-post.service';
import{blogpost} from '../models/blogPost';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit {

   //blogList:blogpost[];
    blogPostId:any;
    blogPost$:Observable<blogpost>; // observable  sorte de push des information donc  il faut un pipe async dans le html
 constructor(private blogListService:BlogPostService , private route:ActivatedRoute) { }

 ngOnInit(): void {
  // this.blogPostId=this.route.snapshot.paramMap.get('id') ;
  this.blogPostId = this.route.snapshot.paramMap.get('id');
   this.BlogPostById(this.blogPostId);
  
 }
BlogPostById(blogPostId){
  this.blogPost$ = this.blogListService.getBlogById(blogPostId)
  /*this.blogListService.getBlogList().subscribe(res=>{
   this.blogList$=res
  })*/
 // this.blogPost$=this.blogListService.getBlogById(blogPostId);
 //  console.log(JSON.stringify(this.blogPost$))
}

}
