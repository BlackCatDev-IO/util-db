import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  Param,
  Post,
} from '@nestjs/common';
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
  @Header('content-type', 'application/json')
  async createUser(@Body() utilDTO: UtilDTO): Promise<UtilDTO> {
    return await this.appService.insertOne(utilDTO);
  }

  @Delete(':id')
  async deleteEntry(@Param('id') id: string): Promise<UtilDTO> {
    return await this.appService.deleteOne(id);
  }
}
