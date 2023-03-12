import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';
import { UserExistsByEmailValidator } from './validator/user-exists-by-email.validator';

@Module({
  controllers: [UserController],
  providers: [UserService, UserRepository, UserExistsByEmailValidator],
  exports: [UserService],
})
export class UserModule {}
