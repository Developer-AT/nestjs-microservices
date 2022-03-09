import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(
    @Inject('CLIENT_SERVICE') private clientService: ClientProxy
  ){}
  getHello(): string {
    return 'Hello World!';
  }

  createItem(createItemDto) {
    return this.clientService.send({ role: 'client', cmd: 'create' }, createItemDto);
  }

  getItemById(id: number) {
    return this.clientService.send({ role: 'client', cmd: 'get-by-id' }, id);
  }
}
