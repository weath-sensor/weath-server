import { Body, Controller, Post } from '@nestjs/common';
import { TemperatureService } from './temperature.service';

@Controller('temperature')
export class TemperatureController {
  constructor(private readonly temperatureService: TemperatureService) {}

  // POST endpoint to receive temperature data
  @Post()
  async receiveTemperature(@Body() body: { temperature: number }) {
    // Log and store the temperature data
    const { temperature } = body;
    console.log('Received Temperature:', temperature);

    // Call the service to store the temperature
    this.temperatureService.setTemperature(temperature);

    return { message: 'Temperature data received successfully' };
  }
}
