import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/Models/post';
import { PostService } from 'src/app/Services/post.service';


@Component({
  selector: 'app-current-post',
  templateUrl: './current-post.component.html',
  styleUrls: ['./current-post.component.css']
})
export class CurrentPostComponent implements OnInit {

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
