import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TemperatureData } from './temperature.entity';

@Injectable()
export class TemperatureService {
  constructor(
    @InjectRepository(TemperatureData)
    private readonly temperatureRepository: Repository<TemperatureData>,
  ) {}

  async create(temperature: number): Promise<TemperatureData> {
    const newTemperature = this.temperatureRepository.create({ temperature });
    return await this.temperatureRepository.save(newTemperature);
  }

  async findAll(): Promise<TemperatureData[]> {
    return await this.temperatureRepository.find();
  }
}
