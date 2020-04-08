import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { blogpost } from '../models/blogPost';
import { BlogPostService } from '../blog-post.service';
import { AuthService } from '../models/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  //blogPost$:Observable<blogpost[]>;
  isSelected=true;
  blogPost:blogpost[];
  errorFromServer="";
  constructor( private blogPostService:BlogPostService, private authService:AuthService , private router :Router) { }

  ngOnInit(): void {
    if(this.authService.isAuthenticated== true){
      this.router.navigate(['/admin'])
    }
    this.getAllBlogPosts();
    this.blogPostService.handleBlocPostCreate().subscribe(res=>this.refresh(res)),err=>this.handleError(err)
  }
/* getAllBlogPosts(){
   this.blogPost$=this.blogPostService.getBlogList();
 }*/
 getAllBlogPosts(){
   this.blogPostService.getBlogList().subscribe(res=>this.refresh(res))
    }
 /*deleteSingleBlog(selectedOptions){
   
  const id$=selectedOptions.map(blog_id=>blog_id.value);
  id$.forEach(element => {
    console.log(element)
   this.blogPostService.deleteBlogById(element).subscribe(res=>{
     console.log(res);
     this.getAllBlogPosts()
  })
  });
  //this. getAllBlogPosts()
   //this.id=selectedOptions.selected
   // console.log(id$)
 // this.blogPostService.deleteBlogById(id)
}*/
deleteBlog(selectedOptions){
 
  const id$=selectedOptions.map(blog_id=>blog_id.value);
  if(id$.length ===1){
    this.blogPostService.deleteBlogById(id$[0])
    .subscribe(res=>this.refresh(res),err=>this.handleError(err))
  }else{
  
  return  this.blogPostService.deleteMultiBlog(id$)
  .subscribe(res=> this.refresh(res)
    //  this.getAllBlogPosts()
  ,err=>this.handleError(err) )}
  
  

}
    refresh(data){
      console.log(data)
      this.blogPostService.getBlogList().subscribe(data=>{
      this.blogPost=data
    });
    }
    handleError(error){
      this.errorFromServer=`error : ${error.staus}-${error.statusText}`
      console.error(error)
    }
    logout(){
      this.authService.logout().subscribe(res=>{console.log('logout!') ; this.router.navigate['']}, err=> this.handleError(err)

      )

    }
}
