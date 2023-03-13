import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { TagService } from '../tag.service';

@ValidatorConstraint({ name: 'tagExistsByIdValidator', async: true })
export class TagExistsByIdValidator implements ValidatorConstraintInterface {
  constructor(private readonly tagService: TagService) {}

  async validate(id: number): Promise<boolean> {
    const tag = await this.tagService.findById(id);

    return Boolean(tag);
  }

  defaultMessage() {
    return 'Tag not found';
  }
}
