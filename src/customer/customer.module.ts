import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { CustomerController } from './customer.controller';
import { CustomerService } from './customer.service';

import { APIKeyMiddleware } from '../middleware/api-key.middleware';

@Module({
  controllers: [CustomerController],
  providers: [CustomerService],
})
export class CustomerModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(APIKeyMiddleware)
      .exclude({ path: 'customer', method: RequestMethod.GET })
      .forRoutes(CustomerController);
  }
}
