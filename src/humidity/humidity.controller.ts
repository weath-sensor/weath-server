// humidity.controller.ts

import { Controller, Post, Body, Get } from '@nestjs/common';
import { HumidityService } from './humidity.service';

@Controller('humidity-data')
export class HumidityController {
  constructor(private readonly humidityService: HumidityService) {}

  @Post()
  async saveHumidityData(@Body() body: { humidityValue: number }) {
    const { humidityValue } = body;
    return this.humidityService.createHumidityData(humidityValue);
  }

  @Get()
  async getAllHumidityData() {
    return this.humidityService.getAllHumidityData();
  }
}
