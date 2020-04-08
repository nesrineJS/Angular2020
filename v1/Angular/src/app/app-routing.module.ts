import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogPostListComponent } from './blog-post-list/blog-post-list.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { ErrorComponent } from './error/error.component';
import { AdminComponent } from './admin/admin.component';
import { BlogPostEditComponent } from './blog-post-edit/blog-post-edit.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path:'' , component:LoginComponent},
  { path:'List' , component:BlogPostListComponent},
  { path:'admin' , component:AdminComponent},
  { path:'admin/blog-posts/:id' , component:BlogPostEditComponent},
  { path:'blog-post/:id' , component:BlogPostComponent},
  { path:'**' , component:ErrorComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
