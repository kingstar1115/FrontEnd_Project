import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateContactDto {
  @ApiProperty()
  @IsNotEmpty()
  firstname: string;

  @ApiProperty()
  @IsNotEmpty()
  lastname: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  subject: string;

  @ApiProperty()
  @IsNotEmpty()
  message: string;
}