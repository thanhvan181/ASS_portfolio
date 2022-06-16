import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/Models/post';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  PostServiceList !: IPost[]
  constructor(private PostService: PostService) { }

  ngOnInit(): void {
    this.getWorkList();
  }
  getWorkList() {
    this.PostService.getPosts().subscribe(data => {
      this.PostServiceList = data;
    })
  }

}
