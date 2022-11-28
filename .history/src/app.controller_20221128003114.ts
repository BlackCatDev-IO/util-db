import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { UtilDTO } from './util.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findOne(): Promise<UtilDTO[]> {
    return this.appService.findAll();
  }

  @Post('/add')
  async createUser(@Body utilDTO: UtilDTO): Promise<UtilDTO> {
    return await this.appService.insertOne(util);
  }
}
