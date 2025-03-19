// humidity.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HumidityData } from './humidity.entity';

@Injectable()
export class HumidityService {
  constructor(
    @InjectRepository(HumidityData)
    private humidityDataRepository: Repository<HumidityData>,
  ) {}

  async createHumidityData(humidityValue: number): Promise<HumidityData> {
    const newHumidityData = this.humidityDataRepository.create({ humidity_value: humidityValue });
    return this.humidityDataRepository.save(newHumidityData);
  }

  async getAllHumidityData(): Promise<HumidityData[]> {
    return this.humidityDataRepository.find();
  }
}
