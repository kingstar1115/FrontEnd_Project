import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { BlogService } from '../blog.service';

@ValidatorConstraint({ name: 'blogExistsByIdValidator', async: true })
export class BlogExistsByIdValidator implements ValidatorConstraintInterface {
  constructor(private readonly blogService: BlogService) {}

  async validate(id: number): Promise<boolean> {
    const blog = await this.blogService.findById(id);

    return Boolean(blog);
  }

  defaultMessage() {
    return 'Blog not found';
  }
}
