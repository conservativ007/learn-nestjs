import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostService {
  posts: any[];

  constructor() {
    this.posts = [
      {
        id: 1,
        content: 'test text1',
      },
      {
        id: 2,
        content: 'test text2',
      },
    ];
  }

  async getAll() {
    return this.posts;
  }

  async getById(id: string) {
    return this.posts.find(post => post.id == id);
  }

  async update(id: string, dto: UpdatePostDto) {
    const newPosts = this.posts.map((post) => {
      if (post.id == id) {
        return dto;
      } else {
        return post;
      }
    });

    this.posts = newPosts;
    return dto;
  }

  async removePost(id: string) {
    const newPosts = this.posts.filter((post) => post.id != id);
    this.posts = newPosts;
    return this.posts;
  }


  async createPost(dto: CreatePostDto) {
    const newPosts = [...this.posts, dto];
    this.posts = newPosts;
    return newPosts;
  }
}
