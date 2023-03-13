import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';
import { UserExistsByEmailValidator } from './validator/user-exists-by-email.validator';
import { UserExistsByIdValidator } from './validator/user-exists-by-id.validator';
import { UserExistsByUuidValidator } from './validator/user-exists-by-uuid.validator';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    UserRepository,
    UserExistsByEmailValidator,
    UserExistsByIdValidator,
    UserExistsByUuidValidator,
  ],
  exports: [UserService],
})
export class UserModule {}
