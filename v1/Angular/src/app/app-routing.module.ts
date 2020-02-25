import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogPostListComponent } from './blog-post-list/blog-post-list.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { ErrorComponent } from './error/error.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  { path:'' , component:BlogPostListComponent},
  { path:'admin' , component:AdminComponent},
  { path:'blog-post/:id' , component:BlogPostComponent},
  { path:'**' , component:ErrorComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
