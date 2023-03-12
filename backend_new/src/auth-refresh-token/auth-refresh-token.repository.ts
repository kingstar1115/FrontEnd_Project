import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { DataSource, Repository } from 'typeorm';
import { DateTime } from 'luxon';
import { randomBytes } from 'node:crypto';
import { User } from '@src/user/user.entity';
import { AuthRefreshToken } from './auth-refresh-token.entity';
import { RefreshTokenInfo } from '@src/auth/dto/refresh-token-info.dto';

@Injectable()
export class AuthRefreshTokenRepository extends Repository<AuthRefreshToken> {
  constructor(
    private readonly dataSource: DataSource,
    private readonly configService: ConfigService,
  ) {
    super(AuthRefreshToken, dataSource.manager);
  }

  async createRefreshToken(
    user: User,
    refreshTokenInfo: RefreshTokenInfo,
  ): Promise<AuthRefreshToken> {
    const refreshToken = this.create({
      userId: user.id,
      token: randomBytes(32).toString('hex'),
      useragent: refreshTokenInfo.useragent,
      ipaddress: refreshTokenInfo.ipaddress,
      expireAt: DateTime.now()
        .plus({
          days: this.configService.get('jwtConfig.refreshTokenDurationDays'),
        })
        .toJSDate(),
    });

    return this.save(refreshToken);
  }
}
