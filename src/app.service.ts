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

  async findCreatedAt(): Promise<UtilDTO[]> {
    try {
      return await this.utilModel.find({ createdAt: { $exists: true } }).exec();
    } catch (error) {
      throw new HttpException(error.message, 404);
    }
  }

  async insertOne(utilDTO: UtilDTO): Promise<UtilDTO> {
    return await this.utilModel.create(utilDTO);
  }

  async deleteOne(id: string): Promise<UtilDTO> {
    return await this.utilModel.findByIdAndDelete(id);
  }
}
