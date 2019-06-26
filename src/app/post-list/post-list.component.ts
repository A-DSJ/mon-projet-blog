import { Component, OnInit, Input } from '@angular/core';
import { $ } from 'protractor';
import { Post } from '../models/Post.model';
import { Subscription } from 'rxjs';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})

export class PostListComponent implements OnInit {
 
  posts : Post[];
  postsSubscription: Subscription;

  constructor(private PostsService: PostsService, private router: Router) { }

  ngOnInit() {
    this.postsSubscription = this.PostsService.postSubject.subscribe(
      (posts : Post[]) =>{
        this.posts = posts;
      }
    );
    this.PostsService.emitPosts();
  }

  onDeletePost(post: Post){
    this.PostsService.removePost(post);
  }

  evolutionCompteur(isGood: boolean, post: Post)
  {   
    this.PostsService.likeCount(isGood, post)
  }
}
