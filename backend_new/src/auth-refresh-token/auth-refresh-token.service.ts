import { Injectable } from '@nestjs/common';
import { RefreshTokenInfo } from '@src/auth/dto/refresh-token-info.dto';
import { User } from '@src/user/user.entity';
import { AuthRefreshToken } from './auth-refresh-token.entity';
import { AuthRefreshTokenRepository } from './auth-refresh-token.repository';

@Injectable()
export class AuthRefreshTokenService {
  constructor(
    private readonly authRefreshTokenRepo: AuthRefreshTokenRepository,
  ) {}

  async findOneBy(
    params: Partial<AuthRefreshToken>,
  ): Promise<AuthRefreshToken> {
    return this.authRefreshTokenRepo.findOneBy({ ...params });
  }

  async deleteByToken(token: string): Promise<boolean> {
    const deleteResult = await this.authRefreshTokenRepo.delete({ token });

    return deleteResult.affected === 1;
  }

  async create(
    user: User,
    refreshTokenInfo: RefreshTokenInfo,
  ): Promise<AuthRefreshToken> {
    return this.authRefreshTokenRepo.createRefreshToken(user, refreshTokenInfo);
  }
}
