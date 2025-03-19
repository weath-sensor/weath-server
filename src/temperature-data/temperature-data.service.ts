import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TemperatureData } from './temperature-data.entity';

@Injectable()
export class TemperatureDataService {
  constructor(
    @InjectRepository(TemperatureData)
    private temperatureDataRepository: Repository<TemperatureData>,
  ) {}

  async saveTemperatureData(temperature: number): Promise<TemperatureData> {
    const temperatureData = this.temperatureDataRepository.create({ temperature });
    return await this.temperatureDataRepository.save(temperatureData); // Save temperature data
  }
}
