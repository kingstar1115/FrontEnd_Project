import { Test, TestingModule } from '@nestjs/testing';
import { BlogViewController } from './blog-view.controller';

describe('BlogViewController', () => {
  let controller: BlogViewController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlogViewController],
    }).compile();

    controller = module.get<BlogViewController>(BlogViewController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
