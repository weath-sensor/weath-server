import { Injectable } from '@nestjs/common';
import { parse } from 'json2csv';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TemperatureData } from './temperature/temperature.entity';
import { LdrData } from './ldr-data/ldr-data.entity';
import { Humidity } from './humidity/humidity.entity';

@Injectable()
export class CsvService {
  constructor(
    @InjectRepository(TemperatureData)
    private readonly temperatureRepository: Repository<TemperatureData>,
    @InjectRepository(LdrData)
    private readonly ldrDataRepository: Repository<LdrData>,
    @InjectRepository(Humidity)
    private readonly humidityRepository: Repository<Humidity>,
  ) {}

  async generateCsv(type: string): Promise<string> {
    let data;

    switch (type) {
      case 'temperature':
        data = await this.temperatureRepository.find();
        break;
      case 'ldr':
        data = await this.ldrDataRepository.find();
        break;
      case 'humidity':
        data = await this.humidityRepository.find();
        break;
      default:
        throw new Error('Invalid type');
    }

    return parse(data);
  }
}
