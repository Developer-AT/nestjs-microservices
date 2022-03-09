import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  createItem(createItemDto) {
    return {success: true, msg: 'Item CReated'};
  }

  getItemById(id: number) {
    return {success: true};
  }
}
