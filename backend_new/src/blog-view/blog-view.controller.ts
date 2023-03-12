import { Controller, UseGuards } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { JwtAuthGuard } from '@src/auth/guards/jwt-auth.guard';
import { ApiResponseHelper } from '@src/common/helpers/api-response.helper';
import { User } from '@src/user/user.entity';
import { BlogViewService } from './blog-view.service';

@Controller('blog-view')
@ApiResponse(ApiResponseHelper.success(User))
@ApiResponse(ApiResponseHelper.unauthorized())
@UseGuards(JwtAuthGuard)
export class BlogViewController {
  constructor(private readonly blogViewService: BlogViewService) {}
}
