import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UtilDTO } from './util.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('UtilDTO') private readonly utilModel: Model<UtilDTO>,
  ) {}

  async findOne(id: string): Promise<UtilDTO> {
    try {
      return await this.utilModel.findById(id);
    } catch (error) {
      throw new HttpException(error.message, 404);
    }
  }

  async findAll(): Promise<UtilDTO[]> {
    try {
      return await this.utilModel.find().exec();
    } catch (error) {
      throw new HttpException(error.message, 404);
    }
  }

  async findWithTime(): Promise<UtilDTO[]> {
    try {
      return await this.utilModel.find({ timestamp: { $exists: true } }).exec();
    } catch (error) {
      throw new HttpException(error.message, 404);
    }
  }

  async insertOne(utilDTO: UtilDTO): Promise<UtilDTO> {
    const data = new UtilDTO();
    const now = new Date().getTime();
    const date = new Date(now).toISOString();
    data.timestamp = date;
    data.data = utilDTO;
    return await this.utilModel.create(data);
  }

  async deleteOne(id: string): Promise<UtilDTO> {
    return await this.utilModel.findByIdAndDelete(id);
  }
}
