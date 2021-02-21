import { Module } from '@nestjs/common';
import { MessagingService } from './stock-messaging.service';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';

const user = process.env.RABBITMQ_USER;
const password = process.env.RABBITMQ_PASSWORD;
const host = process.env.RABBITMQ_HOST;
const port = process.env.RABBITMQ_PORT;
const uri = `amqp://${user}:${password}@${host}:${port}`;

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: 'stock',
          type: 'direct',
        },
      ],
      uri: uri,
      connectionInitOptions: { wait: false },
    }),
  ],
  providers: [MessagingService],
  controllers: [],
})
export class MessagingModule { }
