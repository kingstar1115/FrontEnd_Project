import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { UserService } from '../user.service';

@ValidatorConstraint({ name: 'userExistsByEmailValidator', async: true })
export class UserExistsByEmailValidator
  implements ValidatorConstraintInterface
{
  constructor(private readonly userService: UserService) {}

  async validate(email: string, args: ValidationArguments): Promise<boolean> {
    const userExists = await this.userService.findByEmail(email);

    return !Boolean(userExists);
  }

  defaultMessage(args: ValidationArguments) {
    return `User with email '${args.value}' already exists`;
  }
}
