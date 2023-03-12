import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UserService } from '../user.service';

@ValidatorConstraint({ name: 'userExistsByUuidValidator', async: true })
export class UserExistsByUuidValidator implements ValidatorConstraintInterface {
  constructor(private readonly userService: UserService) {}

  async validate(uuid: string): Promise<boolean> {
    const user = await this.userService.findByUuid(uuid);

    return Boolean(user);
  }

  defaultMessage() {
    return 'User not found';
  }
}
