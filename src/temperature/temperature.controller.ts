import { Controller, Post, Body, Get } from '@nestjs/common';
import { TemperatureService } from './temperature.service';

@Controller('temperature')
export class TemperatureController {
  constructor(private readonly temperatureService: TemperatureService) {}

  @Post()
  async saveTemperature(@Body() body: { temperature: number }) {
    const { temperature } = body;
    return this.temperatureService.createTemperature(temperature);
  }

  @Get()
  async getAllTemperatures() {
    return this.temperatureService.getAllTemperatures();
  }
}
