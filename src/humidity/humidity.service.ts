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

  // Save new humidity data
  async create(humidity: number): Promise<Humidity> {
    const newEntry = this.humidityRepository.create({
      humidity_value: humidity,
    });

    return this.humidityRepository.save(newEntry); // Save the data to the database
  }

  // Retrieve all humidity data, ordered by timestamp
  async findAll(): Promise<Humidity[]> {
    return this.humidityRepository.find({
      order: { timestamp: 'DESC' },
      take: 100, // Optional: Limit to the most recent 100 records
    });
  }
}
