import { DateTime } from 'luxon';
import { AuthRefreshTokenService } from '@src/auth-refresh-token/auth-refresh-token.service';
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'refreshTokenValidator', async: true })
export class RefreshTokenValidator implements ValidatorConstraintInterface {
  constructor(
    private readonly authRefreshTokenService: AuthRefreshTokenService,
  ) {}

  async validate(token: string, args: ValidationArguments): Promise<boolean> {
    const refreshToken = await this.authRefreshTokenService.findOneBy({
      token,
    });

    return (
      refreshToken &&
      DateTime.fromJSDate(refreshToken.expireAt) > DateTime.now()
    );
  }

  defaultMessage() {
    return `Refresh token not found or expired`;
  }
}
