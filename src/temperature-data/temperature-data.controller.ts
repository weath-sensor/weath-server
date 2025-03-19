import { Controller, Post, Body } from '@nestjs/common';
import { TemperatureDataService } from './temperature-data.service';

@Controller('temperature-data')
export class TemperatureDataController {
  constructor(private readonly temperatureDataService: TemperatureDataService) {}

  @Post()
  async receiveTemperatureData(@Body() body: { temperature: number }) {
    await this.temperatureDataService.saveTemperatureData(body.temperature);
    return { message: 'Temperature data received successfully' };
  }
}
