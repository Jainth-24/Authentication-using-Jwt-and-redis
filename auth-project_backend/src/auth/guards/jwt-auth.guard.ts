import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from '../auth.service';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly authService: AuthService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      return false;
    }

    const token = authHeader.split(' ')[1];

    try {
      const decoded = this.jwtService.verify(token, {
        secret: 'yourSecretKey',
      });


      // Check if token exists in Redis
      const redisToken = await this.authService.redisClient.get(
        decoded.username,
      );
      if (redisToken && JSON.parse(redisToken).token === token) {
        return true;
      }
      return false;
    } catch (error) {
      return false;
    }
  }
}
