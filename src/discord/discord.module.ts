import { Module } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { GatewayService } from './gateway/gateway.service';
import { ApiService } from './api/api.service';
import { DispatchService } from './gateway/dispatch/dispatch.service';

@Module({
  providers: [AuthService, GatewayService, ApiService, DispatchService]
})
export class DiscordModule {}
