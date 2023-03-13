import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '@src/auth/guards/jwt-auth.guard';
import { ApiResponseHelper } from '@src/common/helpers/api-response.helper';
import { User } from '@src/user/user.entity';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { Tag } from './tag.entity';
import { TagService } from './tag.service';

@Controller('tag')
@ApiResponse(ApiResponseHelper.success(User))
@ApiResponse(ApiResponseHelper.unauthorized())
@UseGuards(JwtAuthGuard)
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Post()
  async create(@Body() createTag: CreateTagDto): Promise<Tag> {
    const createdTag = await this.tagService.create(createTag);
    return createdTag;
  }

  @Get()
  async findAll(): Promise<Tag[]> {
    const allTags = await this.tagService.findAll();
    return allTags;
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Tag> {
    const tag = await this.tagService.findById(id);
    return tag;
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateTag: UpdateTagDto) {
    const updatedTag = await this.tagService.update(id, updateTag);
    return updatedTag;
  }
}
