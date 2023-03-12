import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthRefreshToken } from './auth-refresh-token.entity';
import { AuthRefreshTokenRepository } from './auth-refresh-token.repository';
import { AuthRefreshTokenService } from './auth-refresh-token.service';

@Module({
  imports: [TypeOrmModule.forFeature([AuthRefreshToken])],
  providers: [AuthRefreshTokenService, AuthRefreshTokenRepository],
  exports: [AuthRefreshTokenService],
})
export class AuthRefreshTokenModule {}
