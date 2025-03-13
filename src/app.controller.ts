import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { SignupDto } from './dtos/signup.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('signup')
  signup(@Body() signupDto: SignupDto) {
    return this.appService.signup(signupDto);
  }

  @Get('users')
  getUsers() {
    return this.appService.getUsers();
  }
}
