import { Component, OnInit, ElementRef } from '@angular/core';
import { blogpost } from '../models/blogPost';
import {  FormGroup, FormGroupDirective, FormBuilder } from '@angular/forms';
import { BlogPostService } from '../blog-post.service';
import { ActivatedRoute } from '@angular/router';
import {environment} from '../../environments/environment'

@Component({
  selector: 'app-blog-post-edit',
  templateUrl: './blog-post-edit.component.html',
  styleUrls: ['./blog-post-edit.component.css']
})
export class BlogPostEditComponent implements OnInit {
  blogPost:blogpost;
  editFormulaire:FormGroup;
  blogPostId:string;
  pathImage=environment.imagePath;

  constructor(  private fb:FormBuilder, private blogPostService:BlogPostService, private el:ElementRef,private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
     this.blogPostId=this.activatedRoute.snapshot.paramMap.get('id');
      this.blogPostService.getBlogById(this.blogPostId)
      .subscribe(data=>{
        this.blogPost=data
         console.log(this.blogPost)
      },
        error=>console.error(error));
      this.creatForm();
        
  }
  
 creatForm(){
   this.editFormulaire= this.fb.group({
    title:'',
   subtitle:'',
    content:'',
    image:''
    });
  }
  UploadImage(){
     let inputElement:HTMLInputElement=this.el.nativeElement.querySelector('#image');
     let elementCount:number= inputElement.files.length;
     let formData= new FormData();
     if(elementCount >0){
    formData.append('image',inputElement.files.item(0))  ;
    this.blogPostService.uploadFile(formData).subscribe(data=>{console.log(data)}, error=>console.error(error)) }

    
  }
  updateBlogPost( FormDirective: FormGroupDirective){
  if(this.editFormulaire.valid){
     console.log(FormDirective.value)
 this.blogPostService.EditBloc(this.blogPostId, this.editFormulaire.value).subscribe(res=>{this.handleSuccsess(res,FormDirective),err=>this.handleError(err)})
     
}
  }
  handleError(err){
    console.error(err)
  }
  handleSuccsess(data,formDirective){
    console.log(data)
    this.editFormulaire.reset();
    formDirective.resetForm();
     this.blogPostService.dispatchBlocPost(data._id)
   ;
  }
}
