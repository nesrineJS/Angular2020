import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogPosteCreateComponent } from './blog-poste-create.component';

describe('BlogPosteCreateComponent', () => {
  let component: BlogPosteCreateComponent;
  let fixture: ComponentFixture<BlogPosteCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogPosteCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogPosteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
