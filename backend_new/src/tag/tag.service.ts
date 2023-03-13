import { Injectable } from '@nestjs/common';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { Tag } from './tag.entity';
import { TagRepository } from './tag.repository';

@Injectable()
export class TagService {
  constructor(private readonly tagRepository: TagRepository) {}

  async findById(id: number): Promise<Tag> {
    return await this.tagRepository.findOne({ where: { id } });
  }

  async findAll(): Promise<Tag[]> {
    return await this.tagRepository.find();
  }

  async create(body: CreateTagDto): Promise<Tag> {
    const createdTag = await this.tagRepository.create(body);
    return await this.tagRepository.save(createdTag);
  }

  async update(id: number, body: UpdateTagDto) {
    const tag = await this.findById(id);

    if (tag) {
      await this.tagRepository.update({ id }, this.tagRepository.create(body));

      return await this.findById(id);
    }

    return `Tag ID:${id} is not exist`;
  }
}
