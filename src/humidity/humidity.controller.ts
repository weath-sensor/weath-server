import { Controller, Get, Post, Body } from '@nestjs/common';
import { HumidityService } from './humidity.service';

@Controller('humidity')
export class HumidityController {
  constructor(private readonly humidityService: HumidityService) {}

  // POST endpoint to save humidity data
  @Post()
  async create(@Body() body: { humidity: number }) {
    const { humidity } = body;
    return this.humidityService.create(humidity); // Call service to save data
  }

  // GET endpoint to retrieve all humidity data
  @Get()
  async findAll() {
    return this.humidityService.findAll(); // Call service to get all data
  }
}
