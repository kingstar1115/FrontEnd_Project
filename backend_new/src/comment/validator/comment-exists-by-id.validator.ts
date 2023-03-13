import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { CommentService } from '../comment.service';

@ValidatorConstraint({ name: 'commentExistsByIdValidator', async: true })
export class CommentExistsByIdValidator
  implements ValidatorConstraintInterface
{
  constructor(private readonly commentService: CommentService) {}

  async validate(id: number): Promise<boolean> {
    const blog = await this.commentService.findById(id);

    return Boolean(blog);
  }

  defaultMessage() {
    return 'Blog not found';
  }
}
