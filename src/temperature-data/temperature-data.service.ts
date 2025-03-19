import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TemperatureData } from './temperature-data.entity';

@Injectable()
export class TemperatureDataService {
  constructor(
    @InjectRepository(TemperatureData)
    private readonly temperatureDataRepository: Repository<TemperatureData>, // Inject the repository
  ) {}

  async saveTemperatureData(temperature: number) {
    const tempData = new TemperatureData();
    tempData.temperature = temperature;

    // Save the temperature data to the database using the repository
    await this.temperatureDataRepository.save(tempData);
  }
}
