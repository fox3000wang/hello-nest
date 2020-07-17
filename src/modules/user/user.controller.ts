import { Controller, Post, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('/user')
export class UserController {
  @Get()
  getUser() {
    return 'getUser';
  }

  @Post()
  login() {
    return 'login';
  }

  @Post()
  logout() {
    return 'logout';
  }
}
