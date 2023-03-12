import { Test, TestingModule } from '@nestjs/testing';
import { BlogViewService } from './blog-view.service';

describe('BlogViewService', () => {
  let service: BlogViewService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlogViewService],
    }).compile();

    service = module.get<BlogViewService>(BlogViewService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
