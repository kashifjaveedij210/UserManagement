import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { PassportStrategy } from "@nestjs/passport";
import { Model } from "mongoose";
import { ExtractJwt, Strategy } from "passport-jwt";
import { user } from "src/model/user-model";



@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Extract token from Authorization header
      secretOrKey: 'your_jwt_secret', // Replace with your secret key
    });
  }

  async validate(payload: any) {
    console.log('JWT Payload:', payload); // Debug log
    return { userId: payload.sub, roleType: payload.roleType }; // Attach user info
  }
}



// @Injectable()
// export class JwtStrategy extends PassportStrategy(Strategy,'jwt'){
// constructor(@InjectModel(user.name) private userModel: Model<user>,){
//     super({
//         jwtFromRequest:
//         ExtractJwt.fromAuthHeaderAsBearerToken(),
//       secretOrKey: "secret", 
//     }) 
// }
// async validate(payload: any) {
//   return { userId: payload.sub, roleType: payload.roleType }; 
//     // const user = await this.userModel.findOne({ name: payload.name });
//     // return user; 
//   }
// }