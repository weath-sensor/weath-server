import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Temperature } from './temperature.entity';

@Injectable()
export class TemperatureService {
  constructor(
    @InjectRepository(Temperature)
    private temperatureRepository: Repository<Temperature>,
  ) {}

  async createTemperature(temperature: number): Promise<Temperature> {
    const newTemperature = this.temperatureRepository.create({ temperature });
    return this.temperatureRepository.save(newTemperature);
  }

  async getAllTemperatures(): Promise<Temperature[]> {
    return this.temperatureRepository.find();
  }
}
