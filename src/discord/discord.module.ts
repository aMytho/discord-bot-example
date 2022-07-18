import { Module } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { GatewayService } from './gateway/gateway.service';

@Module({
  providers: [AuthService, GatewayService]
})
export class DiscordModule {}
