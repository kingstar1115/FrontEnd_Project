import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnvHelper } from './common/helpers/env.helper';
import appConfig from './config/app.config';
import databaseConfig from './config/database.config';
import jwtConfig from './config/jwt.config';
import { validate } from './common/validators/env.validator';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { AuthRefreshTokenModule } from './auth-refresh-token/auth-refresh-token.module';
import { BlogViewModule } from './blog-view/blog-view.module';
import { TagModule } from './tag/tag.module';
import { CommentModule } from './comment/comment.module';
import { BlogModule } from './blog/blog.module';

EnvHelper.verifyNodeEnv();

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: EnvHelper.getEnvFilePath(),
      isGlobal: true,
      load: [appConfig, databaseConfig, jwtConfig],
      validate: validate,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const config = configService.get('databaseConfig');
        return {
          ...config,
          namingStrategy: new SnakeNamingStrategy(),
          autoLoadEntities: true,
        };
      },
      inject: [ConfigService],
    }),
    UserModule,
    AuthModule,
    AuthRefreshTokenModule,
    BlogViewModule,
    TagModule,
    CommentModule,
    BlogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
