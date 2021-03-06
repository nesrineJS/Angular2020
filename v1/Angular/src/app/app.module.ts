import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogPostListComponent } from './blog-post-list/blog-post-list.component';
import {  HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MaterialModule} from './material.module';
import { ErrorComponent } from './error/error.component';
import { AdminComponent } from './admin/admin.component';
import { BlogPosteCreateComponent } from './blog-poste-create/blog-poste-create.component';
import   {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { AddCookieInterceptor } from './serviceCookieInterceptor';
@NgModule({
  declarations: [
    AppComponent,
    BlogPostComponent,
    BlogPostListComponent,
    ErrorComponent,
    AdminComponent,
    BlogPosteCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,FormsModule
  ],
  providers: [{provide :HTTP_INTERCEPTORS, useClass:AddCookieInterceptor,multi:true}],// ce interceptor s'instancie à partir de la classe qu'on a crée
  bootstrap: [AppComponent]
})
export class AppModule { }
