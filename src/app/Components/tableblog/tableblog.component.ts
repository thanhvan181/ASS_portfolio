import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/Models/post';
import {PostService } from "../../Services/post.service"

@Component({
  selector: 'app-tableblog',
  templateUrl: './tableblog.component.html',
  styleUrls: ['./tableblog.component.css']
})
export class TableblogComponent implements OnInit {

  PostList !: IPost[];
 
  

  constructor(private  PostService: PostService ) { }

  ngOnInit(): void {
    this.showWork()
  }
  showWork(){
    this.PostService.getPosts().subscribe(data => this.PostList = data)
  }
  onRemoveItem(id: number) {
    const confirm = window.confirm('Bạn có chắc chắn muốn xóa không?');
    if (confirm) {
      // call api xoa
      this.PostService.removePost(id).subscribe(() => {
        // reRender
        this.PostList = this.PostList.filter(item => item.id !== id);
      });
    }

  }
}

