import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsString,
  MaxLength,
  MinLength,
  Validate,
  ValidateIf,
} from 'class-validator';
import { UserExistsByUuidValidator } from '../validator/user-exists-by-uuid.validator';

export class UpdateUserDto {
  @ApiProperty({
    example: 'John Doe',
    required: false,
    minimum: 1,
    maximum: 128,
    description: 'Full name',
  })
  @ValidateIf((o) => (!o?.email && !o?.phoneNumber) || o?.name)
  @IsString()
  @MinLength(1)
  @MaxLength(128)
  name: string;

  @ApiProperty({
    example: 'user@example.com',
    required: false,
    maximum: 255,
    description: 'E-mail',
  })
  @ValidateIf((o) => (!o?.name && !o?.phoneNumber) || o?.email)
  @IsEmail()
  @MaxLength(255)
  email: string;

  @Validate(UserExistsByUuidValidator)
  uuid: string;

  @ApiProperty({
    example: '',
    required: false,
    maximum: 255,
    description: 'Wallet Address',
  })
  @ValidateIf((o) => (!o?.name && !o?.phoneNumber) || o?.email)
  @IsString()
  @MaxLength(255)
  walletAddress: string;

  @ApiProperty({
    example: '',
    required: false,
    maximum: 255,
    description: 'Avatar',
  })
  @ValidateIf((o) => (!o?.name && !o?.phoneNumber) || o?.email)
  @IsString()
  @MaxLength(255)
  avatar: string;
}
