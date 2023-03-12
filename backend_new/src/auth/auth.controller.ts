import {
  Body,
  Controller,
  Get,
  Res,
  Post,
  Request,
  UseGuards,
  HttpStatus,
  UseInterceptors,
  HttpCode,
  Req,
} from '@nestjs/common';
import { AuthService } from '@src/auth/auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { ApiBearerAuth, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { ApiResponseHelper } from '@src/common/helpers/api-response.helper';
import { User } from '@src/user/user.entity';
import { LoginUserDto } from './dto/login-user.dto';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
import { TokensResponseDto } from './dto/tokens-response.dto';
import { CookieToBodyInterceptor } from '@src/common/interceptors/cookie-to-body.interceptor';
import { RefreshTokensDto } from './dto/refresh-tokens.dto';
import { RealIP } from 'nestjs-real-ip';
import { RefreshTokenInfo } from './dto/refresh-token-info.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private configService: ConfigService,
  ) {}

  @ApiOperation({ description: `User login` })
  @ApiResponse(ApiResponseHelper.success(User))
  @ApiResponse(ApiResponseHelper.validationError(`Validation failed`))
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(
    @Request() request,
    @Req() req,
    @Body() body: LoginUserDto,
    @Res({ passthrough: true }) res: Response,
    @RealIP() ip: string,
  ) {
    const refreshTokenInfo: RefreshTokenInfo = {
      useragent: req.headers['user-agent'],
      ipaddress: ip,
    };

    const authData = await this.authService.login(
      request.user,
      refreshTokenInfo,
    );

    res.cookie('refreshToken', authData.refreshToken, {
      httpOnly: this.configService.get('jwtConfig.refreshTokenCookieHttpOnly'),
      secure: this.configService.get('jwtConfig.refreshTokenCookieSecure'),
      maxAge:
        this.configService.get('jwtConfig.refreshTokenDurationDays') *
        1000 *
        60 *
        60 *
        24,
      domain: this.configService.get('jwtConfig.refreshTokenCookieDomain'),
    });

    return { accessToken: authData.accessToken };
  }

  @ApiResponse(ApiResponseHelper.success(TokensResponseDto, HttpStatus.OK))
  @UseInterceptors(new CookieToBodyInterceptor('refreshToken', 'refreshToken'))
  @HttpCode(HttpStatus.CREATED)
  @Post('refresh-tokens')
  async refreshTokens(
    @Req() req,
    @RealIP() ip: string,
    @Body() params: RefreshTokensDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<any> {
    const refreshTokenInfo: RefreshTokenInfo = {
      useragent: req.headers['user-agent'],
      ipaddress: ip,
    };
    const authData = await this.authService.refreshTokens(
      params,
      refreshTokenInfo,
    );

    res.cookie('refreshToken', authData.refreshToken, {
      httpOnly: this.configService.get('jwtConfig.refreshTokenCookieHttpOnly'),
      secure: this.configService.get('jwtConfig.refreshTokenCookieSecure'),
      maxAge:
        this.configService.get('jwtConfig.refreshTokenDurationDays') *
        1000 *
        60 *
        60 *
        24,
      domain: this.configService.get('jwtConfig.refreshTokenCookieDomain'),
    });

    return {
      accessToken: authData.accessToken,
    };
  }

  @ApiBearerAuth()
  @ApiResponse(ApiResponseHelper.success(User))
  @ApiResponse(ApiResponseHelper.unauthorized())
  @UseGuards(JwtAuthGuard)
  @Get('/profile')
  async success(@Request() req) {
    return req.user;
  }
}
