// user.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { user } from 'src/model/user-model';

@Injectable()
export class UserService {
  constructor(@InjectModel(user.name) private userModel: Model<user>) {}

  async findAll(): Promise<user[]> {
    return this.userModel.find().exec();
  }

  async findOneById(id: string): Promise<user> {
    const user = await this.userModel.findById(id).exec();
    if (!user) throw new NotFoundException('User not found');
    return user;
  }

//   async updateRole(id: string, role: string): Promise<user> {
//     const user = await this.findOneById(id);
//     user.roleType = role;
//     return user.save();
//   }

  async deleteUser(id: string): Promise<void> {
    const result = await this.userModel.findByIdAndDelete(id).exec();
    if (!result) throw new NotFoundException('User not found');
  }
}
