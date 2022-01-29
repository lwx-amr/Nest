import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  HttpCode,
  Header,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

import { CustomerDto } from './dto/create-customer.dto';

@Controller('customer')
export class CustomerController {
  @Get()
  findAll(): string {
    return 'this is customer route';
  }

  @Get(':id')
  findOne(@Param() params): string {
    const { id } = params;
    return `this is one customer route with id: ${id}`;
  }

  @Post()
  @HttpCode(202)
  @Header('Cache-Control', 'none')
  @Header('testing-flag', 'true')
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async addNewOne(@Body() customer: CustomerDto) {
    console.log(customer);
    return customer;
  }
}
