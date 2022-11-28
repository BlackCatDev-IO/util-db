import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { UtilDTO } from './util.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  // findOne(): string {
  findOne(): Promise<UtilDTO[]> {
    return this.appService.findAll();
  }
}
