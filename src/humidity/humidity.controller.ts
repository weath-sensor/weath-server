import { Controller, Get, Post, Body } from '@nestjs/common';
import { HumidityService } from './humidity.service';

@Controller('humidity')
export class HumidityController {
  constructor(private readonly humidityService: HumidityService) {};

  @Post()
  async create(@Body() body: { humidity: number }) {
    const { humidity } = body
    return this.humidityService.create(humidity)
  };

  @Get()
  async findAll() { return this.humidityService.findAll() };
}
