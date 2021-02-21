import { Module } from '@nestjs/common';
import { MessagingModule } from './stock-messaging/stock-messaging.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [MessagingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
