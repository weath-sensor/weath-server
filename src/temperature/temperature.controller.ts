import { Controller, Get, Post, Body } from '@nestjs/common';
import { TemperatureService } from './temperature.service';
import { TemperatureData } from './temperature.entity';

@Controller('temperature')
export class TemperatureController {
  constructor(private readonly temperatureService: TemperatureService) {}

  @Post()
  async receiveTemperature(@Body() body: { temperature: number }) {
    const { temperature } = body;
    await this.temperatureService.create(temperature);
    return { message: 'Temperature data received and saved successfully' };
  }

  @Get()
  async getTemperature(): Promise<TemperatureData[]> {
    return await this.temperatureService.findAll();  // Fetch all temperature records
  }
}
