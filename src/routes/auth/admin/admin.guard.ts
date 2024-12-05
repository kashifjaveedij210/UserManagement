// admin.guard.ts
import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';

@Injectable()
export class AdminGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user; // Ensure user is being attached correctly

    console.log('User in AdminGuard:', user); // Debug log

    if (!user || user.roleType !== 'admin') {
      throw new ForbiddenException('Access denied. Admins only.');
    }
    return true;
  }
}
