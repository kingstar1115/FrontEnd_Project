import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UserService } from '../user.service';

@ValidatorConstraint({ name: 'userExistsByIdValidator', async: true })
export class UserExistsByIdValidator implements ValidatorConstraintInterface {
  constructor(private readonly userService: UserService) {}

  async validate(id: number): Promise<boolean> {
    const user = await this.userService.findOne(id);

    return Boolean(user);
  }

  defaultMessage() {
    return 'User not found';
  }
}
