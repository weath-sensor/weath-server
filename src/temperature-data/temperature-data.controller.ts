import { Controller, Post, Body } from '@nestjs/common';
import { TemperatureDataService } from './temperature-data.service';

@Controller('temperature-data')
export class TemperatureDataController {
  constructor(private readonly temperatureDataService: TemperatureDataService) {}

  @Post()
  async create(@Body() data: { temperature: number }) {
    const { temperature } = data;
    return await this.temperatureDataService.saveTemperatureData(temperature);
  }
}
