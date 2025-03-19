import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HumidityData } from './humidity.entity';

@Injectable()
export class HumidityService {
  constructor(
    @InjectRepository(HumidityData)
    private readonly humidityRepository: Repository<HumidityData>,
  ) {}

  async create(humidity: number): Promise<HumidityData> {
    const newEntry = this.humidityRepository.create({ humidity });
    return this.humidityRepository.save(newEntry);
  }

  async findAll(): Promise<HumidityData[]> {
    return this.humidityRepository.find({
      order: { timestamp: 'DESC' },
      take: 100, // limit recent 100 records
    });
  }
}
