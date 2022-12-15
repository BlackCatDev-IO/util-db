import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  Param,
  Post,
  Query,
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

  @Get('/daterange?')
  filterDateRange(
    @Query('before') before: string,
    @Query('after') after: string,
  ): Promise<UtilDTO[]> {
    console.log(before);

    return this.appService.filterByDateRange(before, after);
  }

  @Get('/createdAt')
  findCreatedAt(): Promise<UtilDTO[]> {
    return this.appService.findCreatedAt();
  }

  @Post('/add')
  @Header('content-type', 'application/json')
  async createUser(@Body() utilDTO: UtilDTO): Promise<UtilDTO> {
    return await this.appService.insertOne(utilDTO);
  }

  @Delete('/delete/:id')
  async deleteEntry(@Param('id') id: string): Promise<UtilDTO> {
    return await this.appService.deleteOne(id);
  }
}
