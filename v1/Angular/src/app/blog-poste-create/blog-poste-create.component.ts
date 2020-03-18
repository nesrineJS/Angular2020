import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormGroupDirective } from '@angular/forms';
import { BlogPostService } from '../blog-post.service';
import { blogpost } from '../models/blogPost';

@Component({
  selector: 'app-blog-poste-create',
  templateUrl: './blog-poste-create.component.html',
  styleUrls: ['./blog-poste-create.component.css']
})
export class BlogPosteCreateComponent implements OnInit {
  Formulaire:FormGroup
  data:blogpost[]
  constructor( private fb:FormBuilder,private BlocPostService:BlogPostService ,private el:ElementRef) { }

  ngOnInit() {
    this.GetAllData();

    this.CheckForms();
    
  }
  CheckForms(){
     this.Formulaire = this.fb.group({
      title:'',
      subtilte:'',
      content:'',
      image:''
     });
     

  }
   upload(){
     let fileUpload :HTMLInputElement= this.el.nativeElement.querySelector('#image'); //id  ima in html
      let countFile:number= fileUpload.files.length;
      if(countFile >0){
        let formData = new FormData();
        formData.append('image',fileUpload.files.item(0));
        this.BlocPostService.uploadFile(formData).subscribe(res=>console.log(res),err=>console.log(err));
      }
      console.log(countFile)
   }
  create(FormReactive_:FormGroupDirective){

    this.BlocPostService.AddBloc(this.Formulaire.value).subscribe(res=>this.handleSuccsess(res,FormReactive_) ,err=>this.handleError(err) )
    
}
GetAllData(){
  this.BlocPostService.getBlogList().subscribe(res=>{
   this.data=res
  })
}
handleError(err){
  console.log(err)
}
handleSuccsess(data,formDirective){
  console.log(data)
  this.Formulaire.reset();
  formDirective.resetForm();
  this.BlocPostService.dispatchBlocPost(data._id);
  this.GetAllData();
}
}