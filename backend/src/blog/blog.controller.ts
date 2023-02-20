import { Controller, Get } from '@nestjs/common';

@Controller("blog")
export class BlogController {
  constructor() { }

  @Get()
  getHello(): string {
    return "Called blog";
  }
}
