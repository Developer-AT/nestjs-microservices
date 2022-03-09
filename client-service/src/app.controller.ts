import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @MessagePattern({ role: 'client', cmd: 'get-by-id' })
  @Get('/item/:id')
  getById(@Param('id') id: number) {
    return this.appService.getItemById(id);
  }

  @MessagePattern({ role: 'client', cmd: 'create' })
  @Post('/create')
  create(@Body() createItemDto) {
    return this.appService.createItem(createItemDto);
  }
}
