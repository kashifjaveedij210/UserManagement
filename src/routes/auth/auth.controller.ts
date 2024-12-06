import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from '../user/dto/login-user.dto';
import { CreateUserDto } from '../user/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  //  login
  //      @Post('register')
  //   async register(@Body() body: { email: string; password: string; roleType: string }) {
  //     return this.authService.register(body.email, body.password, body.roleType);
  //   }
  @Post('register')
  @UsePipes(new ValidationPipe())
  async register(@Body() createUserDto: CreateUserDto) {
    const res = await this.authService.register(createUserDto);
    return { res: res, message: `User Created Successfully` };
  }

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    return this.authService.login(body.email, body.password);
  }

}
