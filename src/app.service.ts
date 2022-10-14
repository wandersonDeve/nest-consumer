import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  @RabbitSubscribe({
    exchange: 'amq.direct',
    routingKey: 'pagamentos',
    queue: 'nest-consumer',
  })
  getHello(message) {
    console.log(`${JSON.stringify(message)}`);
  }
}
