import { Controller, Post, Body, Get } from '@nestjs/common';
import { LdrDataService } from './ldr-data.service';

@Controller('ldr-data')
export class LdrDataController {
  constructor(private readonly ldrDataService: LdrDataService) {};

  @Post()
  async saveLdrData(@Body() body: { ldrValue: number }) {
    const { ldrValue } = body
    return this.ldrDataService.createLdrData(ldrValue)
  };

  @Get()
  async getAllLdrData() {
    return this.ldrDataService.getAllLdrData()
  };
}
