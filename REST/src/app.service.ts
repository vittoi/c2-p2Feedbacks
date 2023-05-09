import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'c2-p2 API, Bem-vindo!';
  }
}
