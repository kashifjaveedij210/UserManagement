import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { LoginUserDto } from 'src/routes/user/dto/login-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { user } from 'src/model/user-model';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { USER_ROLES_ENUM } from 'src/enum/user';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from '../user/dto/create-user.dto';


@Injectable()
export class AuthService {
    constructor( @InjectModel(user.name) private userModel: Model<user>,private jwt:JwtService ,private config:ConfigService ,){}


    // async register(email: string, password: string, roleType: string) {
    //   const hashedPassword = await bcrypt.hash(password, 10);
    //   const user = new this.userModel({ email, password: hashedPassword, roleType });
    //   console.log(user)
    //   return user.save();

      
    // }

    async register(createUserDto: CreateUserDto) {

      const existingUser = await this.userModel.findOne({ email: createUserDto.email.toLocaleLowerCase() }).exec();
      if (existingUser) {
          throw new ConflictException('Email already exists');
      }

      const saltOrRounds = 10;
      const password = 'random_password';
      const salt = await bcrypt.genSalt();
      const hasPassword = await bcrypt.hash(createUserDto.password, salt);
      console.log(createUserDto.roleType)
      let data = {
          ...createUserDto,
          password: hasPassword,
          email: createUserDto.email.toLocaleLowerCase(),
          balance: 0,
          roleType: createUserDto.roleType,
      }

      const newUser = new this.userModel(data)
   
      return newUser.save()
  }

    async login(email: string, password: string) {
      const user = await this.userModel.findOne({ email });
      if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new UnauthorizedException('Invalid credentials');
      }
      const payload = { sub: user._id, roleType: user.roleType };
      console.log(payload,'payload')
      const token = this.jwt.sign(payload);
      return { access_token: token };
    }

    // async login(user: any) {
    //   const payload = { sub: user.id, role: user.role }; // Include role in the payload
    //   return {
    //     accessToken: this.jwt.sign(payload),
    //   };
    // }

    async signToken(
        name: string,
        email: string,
      ): Promise< {}> {
        const payload = {
          name: name,
          email,
        };
    
        const token = await this.jwt.signAsync(
          payload,
          {
            // expiresIn: '30m',
            secret: "secret",
          },
        );
        return token
        }
}
