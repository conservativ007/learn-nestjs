import { Body, Controller, Get, Param, Post, Delete, Put } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('post')
export class PostController {
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

  @Get()
  async getAll() {
    return this.posts;
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.posts.find((post) => post.id == id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: UpdatePostDto) {
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

  @Delete(':id')
  async removePost(@Param('id') id: string) {
    const newPosts = this.posts.filter((post) => post.id != id);
    this.posts = newPosts;
    return this.posts;
  }

  @Post()
  async createPost(@Body() dto: CreatePostDto) {
    const newPosts = [...this.posts, dto];
    this.posts = newPosts;
    return newPosts;
  }
}
