import { Controller, Post, Get } from '@nestjs/common';

@Controller('user')
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
