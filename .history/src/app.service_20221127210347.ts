import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UtilDTO } from './util.entity';

@Injectable()
export class AppService {
  // constructor(
  //   @InjectModel('UtilDTO') private readonly utilModel: Model<UtilDTO>,
  // ) {}

  async findOne(id: string): Promise<UtilDTO> {
    try {
      const test = UtilDTO();
      return await UtiDTO{ data: 'bruh' };
      // return await this.utilModel.findById(id).exec();
    } catch (error) {
      throw new HttpException(error.message, 404);
    }
  }

  findAll(): string {
    return 'duuuude';

    // async findAll(): Promise<UtilDTO[]> {
    try {
      // return await this.utilModel.find().exec();
    } catch (error) {
      throw new HttpException(error.message, 404);
    }
  }

  // getHello(): string {
  //   return 'Hello bruh';
  // }
}
