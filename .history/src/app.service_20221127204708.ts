import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AppService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  getHello(): string {
    return 'Hello bruh';
  }
}
