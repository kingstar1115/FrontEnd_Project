import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { BlogViewService } from '../blog-view.service';

@ValidatorConstraint({ name: 'blogviewExistsByIdValidator', async: true })
export class BlogViewExistsByIdValidator
  implements ValidatorConstraintInterface
{
  constructor(private readonly blogviewService: BlogViewService) {}

  async validate(id: number): Promise<boolean> {
    const blog = await this.blogviewService.findById(id);

    return Boolean(blog);
  }

  defaultMessage() {
    return 'Blog View not found';
  }
}
