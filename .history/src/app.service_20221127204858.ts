import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UtilDTO } from './util.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UtilDTO>,
  ) {}

  async findOne(id: string): Promise<UtilDTO> {
    try {
      return await this.userModel.findById(id).exec();
    } catch (error) {
    }
  }

  getHello(): string {
    return 'Hello bruh';
  }
}
