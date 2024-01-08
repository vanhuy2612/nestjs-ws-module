import { Module } from '@nestjs/common';
import { WSGateway } from './ws.gateway';
import { WSService } from './services/ws.service';

@Module({
  imports: [],
  controllers: [],
  providers: [WSGateway, WSService],
  exports: [WSGateway, WSService],
})
export class WSModule {}
