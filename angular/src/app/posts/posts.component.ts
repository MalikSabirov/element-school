import { Component } from '@angular/core';
import { POSTS } from '../mock-posts';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent {
  posts = POSTS;
}
