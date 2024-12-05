import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { user, UserSchema } from 'src/model/user-model';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from './strategy/jwt.strategy';
import { JwtGuard } from './guard/jwt.guard';

@Module({
  // imports:[MongooseModule.forFeature([{name:user.name,schema:UserSchema}]),PassportModule,
  // JwtModule.registerAsync({
  //   imports: [ConfigModule],
  //   useFactory: async (configService: ConfigService) => ({
  //     // secret: configService.get('JWT_SECRET'),
  //     secret:"secret"
  //     // signOptions: { expiresIn: '60s' },
  //   }),
  //   inject: [ConfigService],
  // }),
  // ConfigModule.forRoot(),],
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'your_jwt_secret',
      signOptions: { expiresIn: '1h' },
    }),
    MongooseModule.forFeature([{ name: user.name, schema: UserSchema }]),
  ],
  controllers: [AuthController],
  providers: [AuthService,JwtStrategy]
})
export class AuthModule {}
