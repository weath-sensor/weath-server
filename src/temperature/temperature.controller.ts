import { Body, Controller, Post } from '@nestjs/common';
import { TemperatureService } from './temperature.service';

@Controller('temperature')
export class TemperatureController {
  constructor(private readonly temperatureService: TemperatureService) {}

  @Post()
  async receiveTemperature(@Body() body: { temperature: number }) {
    const { temperature } = body;
    await this.temperatureService.create(temperature);
    return { message: 'Temperature data received and saved successfully' };
  }
}
