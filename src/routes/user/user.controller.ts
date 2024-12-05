// user.controller.ts
import { Controller, Get, Patch, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { AdminGuard } from '../auth/admin/admin.guard';
import { JwtGuard } from '../auth/guard/jwt.guard';

@Controller('users')
@UseGuards(JwtGuard, AdminGuard) // Protect all routes with AdminGuard
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getAllUsers() {
    return this.userService.findAll();
  }

//   @Patch(':id/role')
//   async updateUserRole(
//     @Param('id') id: string,
//     @Body('role') role: string,
//   ) {
//     return this.userService.updateRole(id, role);
//   }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    await this.userService.deleteUser(id);
    return { message: 'User deleted successfully' };
  }
}
