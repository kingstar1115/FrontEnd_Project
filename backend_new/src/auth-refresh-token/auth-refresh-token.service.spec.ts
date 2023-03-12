import { Test, TestingModule } from '@nestjs/testing';
import { AuthRefreshTokenService } from './auth-refresh-token.service';

describe('AuthRefreshTokenService', () => {
  let service: AuthRefreshTokenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthRefreshTokenService],
    }).compile();

    service = module.get<AuthRefreshTokenService>(AuthRefreshTokenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
