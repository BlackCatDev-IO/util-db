import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  getHello(): string {
    return 'Hello bruh';
  }
}
