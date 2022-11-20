import { Body, Controller, Get, Param, Post, Delete, Put } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  posts: any[];

  constructor(private readonly postService: PostService) { }

  @Get()
  async getAll() {
    return this.postService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.postService.getById(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() dto: UpdatePostDto) {
    return this.postService.update(id, dto);
  }

  @Delete(':id')
  async removePost(@Param('id') id: string) {
    return this.postService.removePost(id);
  }

  @Post()
  async createPost(@Body() dto: CreatePostDto) {
    return this.postService.createPost(dto);
  }
}
