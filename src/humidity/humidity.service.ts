import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Humidity } from './humidity.entity';

@Injectable()
export class HumidityService {
  constructor(
    @InjectRepository(Humidity)
    private readonly humidityRepository: Repository<Humidity>,
  ) {}

  async create(humidity: number): Promise<Humidity> {
    const newEntry = this.humidityRepository.create({ humidity_value: humidity })
    return this.humidityRepository.save(newEntry)
  };

  async findAll(): Promise<Humidity[]> {
    return this.humidityRepository.find({
      order: { timestamp: 'DESC' },
      take: 100,
    });
  }
}
