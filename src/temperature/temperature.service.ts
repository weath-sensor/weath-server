import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TemperatureData } from './temperature.entity';

@Injectable()
export class TemperatureService {
  constructor(
    @InjectRepository(TemperatureData)
    private temperatureRepository: Repository<TemperatureData>,
  ) {};

  async createTemperature(temperature: number): Promise<TemperatureData> {
    const newTemperature = this.temperatureRepository.create({ temperature })
    return this.temperatureRepository.save(newTemperature)
  };

  async getAllTemperatures(): Promise<TemperatureData[]> {
    return this.temperatureRepository.find()
  };
}
