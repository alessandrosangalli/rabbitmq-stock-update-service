import { AmqpConnection, RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MessagingService {
  constructor(private readonly amqpConnection: AmqpConnection) { }

  publish() {
    console.log('publishing fanout');
    this.amqpConnection.publish('exchange_fanout', '', {
      msg: 'publish fanout',
    });
  }

  @RabbitSubscribe({
    exchange: 'stock',
    routingKey: 'incremented',
    queue: 'increment_queue',
  })
  public async incrementHandler(msg: {}) {
    console.log(`increment: ${JSON.stringify(msg)}`);
  }

  @RabbitSubscribe({
    exchange: 'stock',
    routingKey: 'decremented',
    queue: 'decrement_queue',
  })
  public async decrementHanlder(msg: {}) {
    console.log(`decrement: ${JSON.stringify(msg)}`);
  }
}
